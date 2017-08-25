---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsSipProxyRealm

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Used to assign the default realm (SIP Communications Service) to a collection of proxy configuration settings.
Realms (also known as protection domains) are used to authenticate user credentials during logon.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Used to assign the default realm (SIP Communications Service) to a collection of proxy configuration settings.
Realms (also known as protection domains) are used to authenticate user credentials during logon.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsSipProxyRealm -RealmChoice <IRealmChoice> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Proxy servers provide a way for users outside your internal network to access resources on your internal network.
Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Microsoft Lync Server 2010 uses SIP Communications Service as its default realm; however, it is possible to change the realm used by a proxy server.
The New-CsSipProxyUseDefault and New-CsSipProxyCustom cmdlets provide a way for you to change the realm used by a proxy server.
These changes can also be made by using New-CsSipProxyRealm.
However, because this cmdlet requires an additional step you might want to use the other two cmdlets any time you need to change the realm used by a proxy server.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyRealm cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsSipProxyRealm"}

**Below Content Applies To:** Lync Server 2013

Proxy servers provide a way for users outside your internal network to access resources on your internal network.
Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Lync Server uses SIP Communications Service as its default realm; however, it is possible to change the realm used by a proxy server.
The New-CsSipProxyUseDefault and New-CsSipProxyCustom cmdlets provide a way for you to change the realm used by a proxy server.
These changes can also be made by using New-CsSipProxyRealm.
However, because this cmdlet requires an additional step you might want to use the other two cmdlets any time you need to change the realm used by a proxy server.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyRealm cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsSipProxyRealm"}

**Below Content Applies To:** Skype for Business Server 2015

Proxy servers provide a way for users outside your internal network to access resources on your internal network.
Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Skype for Business Server 2015 uses SIP Communications Service as its default realm; however, it is possible to change the realm used by a proxy server.
The New-CsSipProxyUseDefault cmdlet and the New-CsSipProxyCustom cmdlet provide a way for you to change the realm used by a proxy server.
These changes can also be made by using the New-CsSipProxyRealm cmdlet.
However, because this cmdlet requires an additional step you might want to use the other two cmdlets any time you need to change the realm used by a proxy server.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
$x = New-CsSipProxyUseDefault
$y = New-CsSipProxyRealm -RealmChoice $x
```

The commands shown in Example 1 assign the default realm (SIP Communications Service) to a variable named $y.
To do this, the first command calls New-CsSipProxyUseDefault in order to create a SipProxy.UseDefault object; this object is stored in a variable named $x.

In the second command, $x is used as the parameter value for New-CsSipProxyRealm and the RealmChoice parameter.
In turn, this creates a new proxy realm object that is stored in a variable named $y.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 assign the default realm (SIP Communications Service) to a variable named $y.
To do this, the first command calls New-CsSipProxyUseDefault in order to create a SipProxy.UseDefault object; this object is stored in a variable named $x.

In the second command, $x is used as the parameter value for New-CsSipProxyRealm and the RealmChoice parameter.
In turn, this creates a new proxy realm object that is stored in a variable named $y.

$x = New-CsSipProxyUseDefault

$y = New-CsSipProxyRealm -RealmChoice $x

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 assign the default realm (SIP Communications Service) to a variable named $y.
To do this, the first command calls the New-CsSipProxyUseDefault cmdlet in order to create a SipProxy.UseDefault object; this object is stored in a variable named $x.

In the second command, $x is used as the parameter value for the New-CsSipProxyRealm cmdlet and the RealmChoice parameter.
In turn, this creates a new proxy realm object that is stored in a variable named $y.

$x = New-CsSipProxyUseDefault

$y = New-CsSipProxyRealm -RealmChoice $x

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
$x = New-CsSipProxyCustom -CustomValue "Litwareinc Communications Service"
$y = New-CsSipProxyRealm -RealmChoice $x
```

The commands shown in Example 2 assign a custom realm (Litwareinc Communications Service) to a variable named $y.
To do this, the first command calls New-CsSipProxyCustom in order to create a SipProxy.Custom object; this object (which uses the CustomValue Litwareinc Communications Service) is stored in a variable named $x.

In the second command, $x is used, along with the New-CsSipProxyRealm cmdlet and the RealmChoice parameter, to create a new custom realm object.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 assign a custom realm (Litwareinc Communications Service) to a variable named $y.
To do this, the first command calls New-CsSipProxyCustom in order to create a SipProxy.Custom object; this object (which uses the CustomValue Litwareinc Communications Service) is stored in a variable named $x.

In the second command, $x is used, along with the New-CsSipProxyRealm cmdlet and the RealmChoice parameter, to create a new custom realm object.

$x = New-CsSipProxyCustom -CustomValue "Litwareinc Communications Service"

$y = New-CsSipProxyRealm -RealmChoice $x

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 assign a custom realm (Litwareinc Communications Service) to a variable named $y.
To do this, the first command calls the New-CsSipProxyCustom cmdlet in order to create a SipProxy.Custom object; this object (which uses the CustomValue Litwareinc Communications Service) is stored in a variable named $x.

In the second command, $x is used, along with the New-CsSipProxyRealm cmdlet and the RealmChoice parameter, to create a new custom realm object.

$x = New-CsSipProxyCustom -CustomValue "Litwareinc Communications Service"

$y = New-CsSipProxyRealm -RealmChoice $x

## PARAMETERS

### -RealmChoice
Object representing the realm to be used by a proxy server.
The RealmChoice must be created by using either the New-CsSipProxyUseDefault or the New-CsSipProxyCustom cmdlet.

```yaml
Type: IRealmChoice
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
New-CsSipProxyRealm does not accept pipelined input.

###  
None.
The New-CsSipProxyRealm cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsSipProxyRealm creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.Realm object.

###  
The New-CsSipProxyRealm cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.Realm object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/fedf9c71-5a23-4818-9f98-db5008a2ba74(OCS.14).aspx)

[New-CsSipProxyCustom]()

[New-CsSipProxyUseDefault]()

[Online Version](http://technet.microsoft.com/EN-US/library/fedf9c71-5a23-4818-9f98-db5008a2ba74(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/fedf9c71-5a23-4818-9f98-db5008a2ba74(OCS.16).aspx)

