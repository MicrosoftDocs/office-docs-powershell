---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsSipProxyUseDefault

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
New-CsSipProxyUseDefault [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Proxy servers provide a way for users outside your internal network to access resources on your internal network.
Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Microsoft Lync Server 2010 uses SIP Communications Service as its default realm; however, it is possible to change the realm employed by a proxy server.
If you change the realm and then want to revert back to using the default realm, you can do so by creating a SipProxy.UseDefault object, and then assigning that object to the Realm property of the appropriate proxy server (or servers).

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyUseDefault cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsSipProxyUseDefault"}

**Below Content Applies To:** Lync Server 2013

Proxy servers provide a way for users outside your internal network to access resources on your internal network.
Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Lync Server uses SIP Communications Service as its default realm; however, it is possible to change the realm employed by a proxy server.
If you change the realm and then want to revert back to using the default realm, you can do so by creating a SipProxy.UseDefault object, and then assigning that object to the Realm property of the appropriate proxy server (or servers).

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsSipProxyUseDefault cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsSipProxyUseDefault"}

**Below Content Applies To:** Skype for Business Server 2015

Proxy servers provide a way for users outside your internal network to access resources on your internal network.
Each proxy server must be associated with a realm; realms (also known as protection domains) indicate where a user's logon credentials should be processed.
By default, Skype for Business Server 2015 uses SIP Communications Service as its default realm; however, it is possible to change the realm employed by a proxy server.
If you change the realm and then want to revert back to using the default realm, you can do so by creating a SipProxy.UseDefault object, and then assigning that object to the Realm property of the appropriate proxy server (or servers).



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
$x = New-CsSipProxyUseDefault
```

The command shown in Example 1 assigns the default realm (SIP Communications Service) to a variable named $x.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 assigns the default realm (SIP Communications Service) to a variable named $x.

$x = New-CsSipProxyUseDefault

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 assigns the default realm (SIP Communications Service) to a variable named $x.

$x = New-CsSipProxyUseDefault

## PARAMETERS

### -Verbose
Reports detailed activity to the screen as the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: vb
Applicable: Lync Server 2010

Required: False
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
New-CsSipProxyUseDefault does not accept pipelined input.

###  
None.
The New-CsSipProxyUseDefault cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsSipProxyUseDefault creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.UseDefault object.

###  
The New-CsSipProxyUseDefault cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SipProxy.UseDefault object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/1e8bedca-8bd5-4559-b530-0f18ae23d6d3(OCS.14).aspx)

[New-CsSipProxyCustom]()

[New-CsSipProxyRealm]()

[Online Version](http://technet.microsoft.com/EN-US/library/1e8bedca-8bd5-4559-b530-0f18ae23d6d3(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/1e8bedca-8bd5-4559-b530-0f18ae23d6d3(OCS.16).aspx)

