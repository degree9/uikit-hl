(ns uikit-hl.subnav
  (:require [hoplon.core :as h]
            [hoplon.jquery]))

(defn- format-subnav [subnav]
  (str "uk-subnav-" subnav))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-subnav (name kw)) v}))
