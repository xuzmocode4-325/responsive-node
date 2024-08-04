from flask import Flask, render_template
import datetime  # import the datetime library

app = Flask(__name__, static_url_path="/static")

art_scripts = [
  {
    "id": 1,
    "name": "An Approximation",
    "link": "scripts/artworks/an_approximation.js",
    "date": "2023-04-21",
    "slug": "an-approximation"
  },
  {
    "id": 2,
    "name": "Crossing Over",
    "link": "scripts/artworks/crossing_over.js",
    "date": "2023-04-21",
    "slug": "crossing-over"
  },
  {
    "id": 3,
    "name": "Concentric Concentrate",
    "link": "scripts/artworks/concentric_concentrate.js",
    "date": "2023-04-21",
    "slug": "concentric-concentrate"
  },
  {
    "id": 4,
    "name": "The Magic Trail",
    "link": "scripts/artworks/magic_trail.js",
    "date": "2023-04-21",
    "slug": "magic-trail"
  },
]

node_links = [
  {
    "id": 2,
    "link": "https://github.com/xuzmocode4-325",
    "name": "GitHub",
    "icon": "fa fa-github",
  }, 
  {
    "id": 3,
    "link": "https://www.linkedin.com/in/katlego-thobye-82b6681b5/",
    "name": "LinkedIn",
    "icon": "fa-brands fa-linkedin-in",
  }, 
  {
    "id": 4,
    "link": "https://www.instagram.com/xuz_monomi/",
    "name": "Instagram",
    "icon": "fa-brands fa-instagram",
  },
  {
    "id": 5,
    "link": "https://xuzmonomi.bandcamp.com/music",
    "name": " Bandcamp",
    "icon": "fa fa-bandcamp",
  }, 
  {
    "id": 6,
    "link": "https://www.behance.net/xuzmonomi",
    "name": " Behance",
    "icon": "fa fa-behance",
  }
]


@app.route('/')
def index():
  intro_paragraph = """A digital artist and web app develper that 
  specializes in AI and the creation of 
  interactive, engaging and responsive websites."""

  call_to_action = """
  Contact me if you need to do on-brand bespoke customizations 
  for your start-up, e-commerce or service business website or build 
  something new and captivating from scratch. 
  """
  content = f"""
  <main>
          <h1 class="heading">Welcome</h1>
          <img class="hero" src="static/images/avatar.jpg" />
          <h2 class="heading">I am Xuzmonomi</h2>
          <p>
            {intro_paragraph}
          </p>
          <p>
            {call_to_action}
          </p>
  </main>
  """
  return render_template("default-page.html", 
    title="Home",
    content=content
  )


@app.route('/gallery')
def gallery():

  def linkify(slug):
    return '/gallery/' + slug

  link_list = "".join([
      f"""<li><a href="{linkify(script['slug'])}">{script['name']}</a></li>""".
      strip() for script in art_scripts
  ])

  content = f"""
    <h2 class="heading">My Gallery</h2>
    <main>
      <ul class="art-list">
        {link_list}
      </ul>
    </main>
  """
  return render_template('default-page.html',
    title='Gallery',
    content=content
  )


@app.route('/linknode')
def linktree():
  node_list = "".join([
      f"""
        <li>
          <a href="{node['link']}">
            <i class="{node['icon']}" aria-hidden="true"></i>
            {node['name']}
          </a>
        </li>
      """.strip() for node in node_links
  ])

  content = f"""
   <main>
      <h2 class="heading">My Link Node</h2>
      <p>
      You can catch up with me personally 
      or recieve my latest updates via any one 
      of the fine social media or art profile
      links listed below.
      </p>
      <ul class="node-list">
        {node_list}
      </ul>
    </main>
  """

  return render_template('default-page.html',
    title='Link Node',
    content=content
  )

@app.route('/gallery/<slug>')
def artwork(slug):

  def scriptify(slug):
    data = [script for script in art_scripts if script['slug'] == slug]
    return data[0]

  artwork = scriptify(slug)
  
  return render_template(
    'gallery.html', 
    title=artwork['name'],
    script=artwork['link'],
    )

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=81)
