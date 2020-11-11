(ns uikit-hl.navbar
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-navbar! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-navbar! elem key val))

(defn- format-navbar [navbar]
  (str "uk-navbar-" navbar))

(defmethod uk-navbar! ::default
  [elem kw v]
  (h/do! elem :class {(format-navbar (name kw)) v}))

(defmethod uk-navbar! ::navbar
  [elem _ v]
  (uk/navbar elem v))

(defmethod uk-navbar! ::active
  [elem kw v]
  (h/do! elem :class {:uk-active v}))

(defmethod uk-navbar! ::parent
  [elem kw v]
  (h/do! elem :class {:uk-active v}))

(h/defelem navbar [{:keys [navbar container transparent primary center] :or {navbar {}} :as attr} kids]
  (h/nav
    (dissoc attr :navbar :container :transparent :center)
    ::navbar navbar
    ::container container
    ::transparent transparent
    ::center center
    kids))

(h/defelem container [attr kids]
  (h/div
    attr
    ::container true
    kids))

(h/defelem parent [attr kids]
  (h/li
    attr
    ::parent true
    kids))

(h/defelem left [attr kids]
  (h/div
    attr
    ::left true
    kids))

(h/defelem center [attr kids]
  (h/div
    attr
    ::center true
    kids))

(h/defelem center-left [attr kids]
  (h/div
    attr
    ::center-left true
    kids))

(h/defelem center-right [attr kids]
  (h/div
    attr
    ::center-right true
    kids))

(h/defelem right [attr kids]
  (h/div
    attr
    ::right true
    kids))

(h/defelem nav [attr kids]
  (h/ul
    attr
    ::nav true
    kids))

(h/defelem nav-item [attr kids]
  (h/li attr kids))

(h/defelem subtitle [attr kids]
  (h/div
    attr
    ::subtitle true
    kids))

(h/defelem item [attr kids]
  (h/li
    attr
    ::item true
    kids))

(h/defelem toggle [attr kids]
  (h/a
    attr
    ::toggle true
    kids))

(h/defelem toggle-icon [attr kids]
  (h/a
    attr
    ::toggle-icon true
    kids))

(h/defelem dropdown [attr kids]
  (h/div
    attr
    ::dropdown true
    kids))

(h/defelem dropdown-nav [attr kids]
  (h/ul
    attr
    ::dropdown-nav true
    kids))

(h/defelem dropbar [attr kids]
  (h/div
    attr
    ::dropbar true
    kids))
