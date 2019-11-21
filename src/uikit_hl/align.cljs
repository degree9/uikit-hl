(ns uikit-hl.align
  (:require [clojure.string :as s]
            [hoplon.core :as h]
            [hoplon.jquery]))

(defn- format-align [align]
  (-> (str "uk-align-" align)
    (s/replace "-s" "@s")
    (s/replace "-m" "@m")
    (s/replace "-l" "@l")))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-align (name kw)) v}))
