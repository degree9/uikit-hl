(ns uikit-hl.transition
  (:require [hoplon.core :as h]
            [hoplon.jquery]))

(defn- format-transition [transition]
  (str "uk-transition-" transition))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-transition (name kw)) v}))
