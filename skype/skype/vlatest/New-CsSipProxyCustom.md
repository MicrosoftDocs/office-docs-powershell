---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsSipProxyCustom

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Used to assign a custom realm (SIP Communications Service) to a collection of proxy configuration settings.
Realms (also known as protection domains) are used to authenticate user credentials during logon.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Used to assign a custom realm (SIP Communications Service) to a collection of proxy configuration settings.
Realms (also known as protection domains) are used to authenticate user credentials during logon.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsSipProxyCustom -CustomValue <String> [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Microsoft Lync Server 2010 uses SIP Communications Service as its default realm; however, it is possible to change the realm used by a proxy server.
This is done by creating a SipProxy.Custom object and then assigning that object to the Realm property of the appropriate proxy server (or servers).
You can create a custom realm by using the New-CsSipProxyCustom cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyCustom cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsSipProxyCustom"}

**Below Content Applies To:** Lync Server 2013

Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Lync Server uses SIP Communications Service as its default realm; however, it is possible to change the realm used by a proxy server.
This is done by creating a SipProxy.Custom object and then assigning that object to the Realm property of the appropriate proxy server (or servers).
You can create a custom realm by using the New-CsSipProxyCustom cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyCustom cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsSipProxyCustom"}

**Below Content Applies To:** Skype for Business Server 2015

Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Skype for Business Server 2015 uses SIP Communications Service as its default realm; however, it is possible to change the realm used by a proxy server.
This is done by creating a SipProxy.Custom object and then assigning that object to the Realm property of the appropriate proxy server (or servers).
You can create a custom realm by using the New-CsSipProxyCustom cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
$x = New-CsSipProxyCustom -CustomValue "Litwareinc Communications Service"
```

The command shown in Example 1 assigns a custom realm (Litwareinc Communications Service) to a variable named $x.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 assigns a custom realm (Litwareinc Communications Service) to a variable named $x.

$x = New-CsSipProxyCustom -CustomValue "Litwareinc Communications Service"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 assigns a custom realm (Litwareinc Communications Service) to a variable named $x.

$x = New-CsSipProxyCustom -CustomValue "Litwareinc Communications Service"

## PARAMETERS

### -CustomValue
Name of the realm to be used for authentication purposes.

```yaml
Type: String
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
New-CsSipProxyCustom does not accept pipelined input.

###  
None.
The New-CsSipProxyCustom cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsSipProxyCustom creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.Custom object.

###  
The New-CsSipProxyCustom cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.Custom object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/3dc75cb0-c3d2-48bd-af32-2b2034b655dd(OCS.14).aspx)

[New-CsSipProxyRealm]()

[New-CsSipProxyUseDefault]()

[Online Version](http://technet.microsoft.com/EN-US/library/3dc75cb0-c3d2-48bd-af32-2b2034b655dd(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/3dc75cb0-c3d2-48bd-af32-2b2034b655dd(OCS.16).aspx)

