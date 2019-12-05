(ns uikit-hl.width
  (:require [clojure.string :as s]
            [hoplon.core :as h]
            [hoplon.jquery]))

(defn- format-width [width]
  (-> (str "uk-" width)
    (s/replace #"-s$" "@s")
    (s/replace #"-m$" "@m")
    (s/replace #"-l$" "@l")))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-width (name kw)) v}))
