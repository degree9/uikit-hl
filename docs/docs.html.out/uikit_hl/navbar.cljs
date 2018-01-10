(ns uikit-hl.navbar
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-navbar*   "")
(def ^:dynamic *transparent* nil)
(def ^:dynamic *container*   nil)
(def ^:dynamic *parent*      nil)
(def ^:dynamic *active*      nil)
(def ^:dynamic *title*       nil)
(def ^:dynamic *href*        nil)
(def ^:dynamic *width*       nil)

(defmethod hl/do! :uk-navbar
  [elem _ v]
  (.navbar js/UIkit elem (clj->js v)))

(hl/defelem navbar [attr kids]
  (let [navbar      (:uk-navbar attr *uk-navbar*)
        container   (:container attr *container*)
        transparent (:transparent attr *transparent*)
        attr (assoc attr :uk-navbar navbar)]
    (hl/nav
      (core/assoc-class attr {:uk-navbar-container   container
                              :uk-navbar-transparent transparent}) kids)))

(hl/defelem container [attr kids]
  (let []
    (hl/div
      (core/assoc-class attr {:uk-navbar-container true}) kids)))

(hl/defelem left [attr kids]
  (let []
    (hl/div
      (core/assoc-class attr {:uk-navbar-left true}) kids)))

(hl/defelem center [attr kids]
  (let []
    (hl/div
      (core/assoc-class attr {:uk-navbar-center true}) kids)))

(hl/defelem center-left [attr kids]
  (let []
    (hl/div
      (core/assoc-class attr {:uk-navbar-center-left true}) kids)))

(hl/defelem center-right [attr kids]
  (let []
    (hl/div
      (core/assoc-class attr {:uk-navbar-center-right true}) kids)))

(hl/defelem right [attr kids]
  (let []
    (hl/div
      (core/assoc-class attr {:uk-navbar-right true}) kids)))

(hl/defelem nav [attr kids]
  (let []
    (hl/ul (core/assoc-class attr {:uk-navbar-nav true}) kids)))

(hl/defelem nav-item [attr kids]
  (let [parent (:parent attr *parent*)
        active (:active attr *active*)
        title  (:title  attr *title*)
        href   (:href   attr *href*)
        attr   (dissoc attr :parent :active :title :href)]
    (hl/li (core/assoc-class attr {:uk-parent parent :uk-active active}) [(hl/a :href href title) kids])))

(hl/defelem subtitle [attr kids]
  (let []
    (hl/div (core/assoc-class attr {:uk-navbar-subtitle true}) kids)))

(hl/defelem item [attr kids]
  (let []
    (hl/div (core/assoc-class attr {:uk-navbar-item true}) kids)))

(hl/defelem toggle [attr kids]
  (let []
    (hl/a (core/assoc-class attr {:uk-navbar-toggle true}) [(hl/span :uk-navbar-toggle-icon "") kids])))

(hl/defelem dropbar [attr kids]
  (let []
    (hl/div (core/assoc-class attr {:uk-navbar-dropbar true}) kids)))
