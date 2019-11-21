(ns uikit-hl.text
  (:require [hoplon.core :as h]))

(defn- format-text [text]
  (str "uk-text-" text))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-text (name kw)) v}))
