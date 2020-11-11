(ns uikit-hl.notification
  (:require [uikit-hl.core :as uk]))

(defn notification [opts]
  (uk/notification (clj->js opts)))
