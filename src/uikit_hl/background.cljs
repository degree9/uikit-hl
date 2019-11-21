(ns uikit-hl.background
  (:require [hoplon.core :as h]))

(defn- format-background [background]
  (str "uk-background-" background))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-background (name kw)) v}))
