---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsDiagnosticHeaderConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes one or more of the diagnostic header configuration setting collections currently in use in your organization.
Diagnostic header configuration settings determine whether SIP messages are accompanied by header information that can be useful in troubleshooting and error reporting.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes one or more of the diagnostic header configuration setting collections currently in use in your organization.
Diagnostic header configuration settings determine whether SIP messages are accompanied by header information that can be useful in troubleshooting and error reporting.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsDiagnosticHeaderConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Administrators have the option of attaching an ms-diagnostic header to each SIP message sent in their organization.
This message (which is not visible to end users) contains information that might be useful in troubleshooting connection problems or in reporting errors.
For example, the diagnostic header might contain error codes that enable the client application to take a predetermined course of action should a specific situation arise.

For SIP messages sent within your internal network, there's little reason not to include these diagnostic headers: they have a minimal impact on message size and can be an invaluable tool for administrators trying to troubleshoot connectivity problems.
However, diagnostic headers also contain information -- such as the fully qualified domain names (FQDNs) of your SIP servers -- that you might not want to make available to people outside the internal network.
Because of this, the diagnostic header configuration settings enable you to decide whether you want diagnostic headers sent to users on external networks (such as users in a federated domain) and/or to outside users.
(Outside users are users who have connected from outside the internal network and have not yet been authenticated.)

Alternatively, you can create custom settings at the site scope or at the service scope (for the Edge Server or Registrar service).
That way, you can choose to include diagnostic headers on messages sent from one site, or through one Edge Server, while disallowing headers on messages sent from other sites or through other Edge Servers.

Any new collections you create (at either the site or the service scope) can later be removed by using the Remove-CsDiagnosticHeaderConfiguration cmdlet.
You can also run this cmdlet against the global collection.
In that case, however, the global collection will not be removed because you can't remove the global collection.
Instead, the two properties contained in the global collection -- SendToExternalNetworks and SendToOutsideUnauthenticatedUsers -- will be reset to their default values (which, in each case, is False).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsDiagnosticHeaderConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsDiagnosticHeaderConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Administrators have the option of attaching an ms-diagnostic header to each SIP message sent in their organization.
This message (which is not visible to end users) contains information that might be useful in troubleshooting connection problems or in reporting errors.
For example, the diagnostic header might contain error codes that enable the client application to take a predetermined course of action should a specific situation arise.

For SIP messages sent within your internal network, there's little reason not to include these diagnostic headers: they have a minimal impact on message size and can be an invaluable tool for administrators trying to troubleshoot connectivity problems.
However, diagnostic headers also contain information -- such as the fully qualified domain names (FQDNs) of your SIP servers -- that you might not want to make available to people outside the internal network.
Because of this, the diagnostic header configuration settings enable you to decide whether you want diagnostic headers sent to users on external networks (such as users in a federated domain) and/or to outside users.
(Outside users are users who have connected from outside the internal network and have not yet been authenticated.)

Alternatively, you can create custom settings at the site scope or at the service scope (for the Edge Server or Registrar service).
That way, you can choose to include diagnostic headers on messages sent from one site, or through one Edge Server, while disallowing headers on messages sent from other sites or through other Edge Servers.

Any new collections you create (at either the site or the service scope) can later be removed by using the Remove-CsDiagnosticHeaderConfiguration cmdlet.
You can also run this cmdlet against the global collection.
In that case, however, the global collection will not be removed because you can't remove the global collection.
Instead, the two properties contained in the global collection -- SendToExternalNetworks and SendToOutsideUnauthenticatedUsers -- will be reset to their default values (which, in each case, is False).



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsDiagnosticHeaderConfiguration -Identity site:Redmond
```

In Example 1, the diagnostic header configuration settings that have the Identity site:Redmond are removed.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, the diagnostic header configuration settings that have the Identity site:Redmond are removed.

Remove-CsDiagnosticHeaderConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the diagnostic header configuration settings that have the Identity site:Redmond are removed.

Remove-CsDiagnosticHeaderConfiguration -Identity site:Redmond

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsDiagnosticHeaderConfiguration -Filter service:* | Remove-CsDiagnosticHeaderConfiguration
```

The command shown in Example 2 deletes all the diagnostic header configuration settings that have been applied at the service scope.
To do this, the command first calls Get-CsDiagnosticHeaderConfiguration and the Filter parameter.
The filter value "service:*" limits the returned data to those settings where the Identity begins with the characters "service:".
This filtered collection is then piped to Remove-CsDiagnosticHeaderConfiguration, which deletes each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 deletes all the diagnostic header configuration settings that have been applied at the service scope.
To do this, the command first calls Get-CsDiagnosticHeaderConfiguration and the Filter parameter.
The filter value "service:*" limits the returned data to those settings where the Identity begins with the characters "service:".
This filtered collection is then piped to Remove-CsDiagnosticHeaderConfiguration, which deletes each item in the collection.

Get-CsDiagnosticHeaderConfiguration -Filter service:* | Remove-CsDiagnosticHeaderConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 deletes all the diagnostic header configuration settings that have been applied at the service scope.
To do this, the command first calls the Get-CsDiagnosticHeaderConfiguration cmdlet and the Filter parameter.
The filter value "service:*" limits the returned data to those settings where the Identity begins with the characters "service:".
This filtered collection is then piped to the Remove-CsDiagnosticHeaderConfiguration cmdlet, which deletes each item in the collection.

Get-CsDiagnosticHeaderConfiguration -Filter service:* | Remove-CsDiagnosticHeaderConfiguration

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsDiagnosticHeaderConfiguration | Where-Object {$_.SendToExternalNetworks -eq $True} | Remove-CsDiagnosticHeaderConfiguration
```

The preceding command deletes all the diagnostic header configuration settings that allow sending to external networks.
To do this, the command first uses Get-CsDiagnosticHeaderConfiguration to return a collection of all the diagnostic header settings currently in use.
This collection is piped to the Where-Object cmdlet, which picks out only those settings where the SendToExternalNetworks property is equal to True.
These settings are then piped to Remove-CsDiagnosticHeaderConfiguration, which deletes each setting that allows sending to external networks.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 deletes all the diagnostic header configuration settings that allow sending to external networks.
To do this, the command first uses Get-CsDiagnosticHeaderConfiguration to return a collection of all the diagnostic header settings currently in use.
This collection is piped to the Where-Object cmdlet, which picks out only those settings where the SendToExternalNetworks property is equal to True.
These settings are then piped to Remove-CsDiagnosticHeaderConfiguration, which deletes each setting that allows sending to external networks.

Get-CsDiagnosticHeaderConfiguration | Where-Object {$_.SendToExternalNetworks -eq $True} | Remove-CsDiagnosticHeaderConfiguration

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 deletes all the diagnostic header configuration settings that allow sending to external networks.
To do this, the command first uses the Get-CsDiagnosticHeaderConfiguration cmdlet to return a collection of all the diagnostic header settings currently in use.
This collection is piped to the Where-Object cmdlet, which picks out only those settings where the SendToExternalNetworks property is equal to True.
These settings are then piped to the Remove-CsDiagnosticHeaderConfiguration cmdlet, which deletes each setting that allows sending to external networks.

Get-CsDiagnosticHeaderConfiguration | Where-Object {$_.SendToExternalNetworks -eq $True} | Remove-CsDiagnosticHeaderConfiguration

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the diagnostic header configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To remove settings configured at the service scope, use syntax similar to this: -Identity "service:EdgeServer:atl-edge-001.litwareinc.com".

Remove-CsDiagnosticHeaderConfiguration can also be run against the global configuration settings; in that case, use this syntax: -Identity global.
Note, however, that the global settings will not actually be removed; instead, the properties found in the global settings will be reset to their default values.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the diagnostic header configuration settings to be removed.
To remove settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To remove settings configured at the service scope, use syntax similar to this: -Identity "service:EdgeServer:atl-edge-001.litwareinc.com".

The Remove-CsDiagnosticHeaderConfiguration cmdlet can also be run against the global configuration settings; in that case, use this syntax: -Identity global.
Note, however, that the global settings will not actually be removed; instead, the properties found in the global settings will be reset to their default values.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticHeaderSettings object.
Remove-CsDiagnosticHeaderConfiguration accepts pipelined instances of the diagnostic header settings object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticHeaderSettings object.
The Remove-CsDiagnosticHeaderConfiguration cmdlet accepts pipelined instances of the diagnostic header settings object.

## OUTPUTS

###  
None.
Instead, Remove-CsDiagnosticHeaderConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticHeaderSettings object.

###  
None.
Instead, the Remove-CsDiagnosticHeaderConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticHeaderSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d71b79f1-49f2-4a6c-8b3e-ca909e8d5f49(OCS.14).aspx)

[Get-CsDiagnosticHeaderConfiguration]()

[New-CsDiagnosticHeaderConfiguration]()

[Set-CsDiagnosticHeaderConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/d71b79f1-49f2-4a6c-8b3e-ca909e8d5f49(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d71b79f1-49f2-4a6c-8b3e-ca909e8d5f49(OCS.16).aspx)

