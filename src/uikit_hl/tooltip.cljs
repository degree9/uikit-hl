(ns uikit-hl.tooltip
  (:require [hoplon.core :as h]
            ["uikit" :as uikit]))

(defmethod h/do! :uk-tooltip
  [elem _ v]
  (.tooltip uikit elem (clj->js v)))
