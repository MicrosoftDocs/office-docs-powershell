---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsDiagnosticHeaderConfiguration
schema: 2.0.0
---

# Set-CsDiagnosticHeaderConfiguration

## SYNOPSIS
Modifies an existing diagnostic header configuration setting collection currently in use in your organization.
Diagnostic header configuration settings determine whether SIP messages are accompanied by header information that can be useful in troubleshooting and error reporting.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsDiagnosticHeaderConfiguration [[-Identity] <XdsIdentity>] [-SendToExternalNetworks <Boolean>]
 [-SendToOutsideUnauthenticatedUsers <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [-SendToExternalNetworksOnServiceEdge <Boolean>] [<CommonParameters>]
```

### Instance
```
Set-CsDiagnosticHeaderConfiguration [-Instance <PSObject>] [-SendToExternalNetworks <Boolean>]
 [-SendToOutsideUnauthenticatedUsers <Boolean>] [-Force] [-WhatIf] [-Confirm]
 [-SendToExternalNetworksOnServiceEdge <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Administrators have the option of attaching an ms-diagnostic header to each SIP message sent in their organization.
This message (which is not visible to end users) contains information that might be useful in troubleshooting connection problems or in reporting errors.
For example, the diagnostic header might contain error codes that enable the client application (for example, Skype for Business) to take a predetermined course of action should a specific situation arise.

For SIP messages sent within your internal network, there's little reason not to include these diagnostic headers: they have a minimal impact on message size and can be an invaluable tool for administrators trying to troubleshoot connectivity problems.
However, diagnostic headers also contain information -- such as the fully qualified domain names (FQDNs) of your SIP servers -- that you might not want to make available to people outside the internal network.
Because of this, the diagnostic header configuration settings enable you to decide whether you want diagnostic headers sent to users on external networks (such as users in a federated domain) and/or to outside users.
(Outside users are users who have connected from outside the internal network and have not yet been authenticated.)

By default, headers are not included in messages sent either to external networks or to unauthenticated users.
However, you can modify the global diagnostic header settings to include headers to external networks and/or unauthenticated users.
Alternatively, you can create custom settings at the site scope or at the service scope (for the Edge Server or Registrar service).
That way, you can choose to include diagnostic headers on messages sent from one site, or through one Edge Server, while disallowing headers on messages sent from other sites or through other Edge Servers.

The `Set-CsDiagnosticHeaderConfiguration` cmdlet provides a way for you to modify an existing diagnostic header configuration setting collection.
You can use this cmdlet to enable (or disable) the transmission of diagnostic headers to external networks and/or to outside users.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsDiagnosticHeaderConfiguration -Identity site:Redmond -SendToOutsideUnauthenticatedUsers $True
```

Example 1 modifies the diagnostic header configuration settings that have the Identity site:Redmond.
In this example, the value of the SendToOutsideUnauthenticatedUsers property is set to True.


### -------------------------- Example 2 ------------------------
```
Get-CsDiagnosticHeaderConfiguration | Set-CsDiagnosticHeaderConfiguration -SendToOutsideUnauthenticatedUsers $True
```

The command shown in Example 2 is a variation of the command shown in Example 1; in this case, however, the SendToOutsideUnauthenticatedUsers property is modified for all the diagnostic header configuration settings in use.
To do this, the `Get-CsDiagnosticHeaderConfiguration` cmdlet is first called without any parameters; this returns a collection of all the diagnostic header settings currently in use.
This collection is then piped to the `Set-CsDiagnosticHeaderConfiguration` cmdlet, which sets the SendToOutsideUnauthenticatedUsers property of each item in the collection to True.


### -------------------------- Example 3 ------------------------
```
Get-CsDiagnosticHeaderConfiguration | Where-Object {$_.SendToExternalNetworks -eq $True} | Set-CsDiagnosticHeaderConfiguration -SendToOutsideUnauthenticatedUsers $True
```

In Example 3, the SendToOutsideUnauthenticatedUsers property is modified again, but this time only for those diagnostic header settings where the SendToExternalNetworks property is True.
To carry out this task, the command first uses the `Get-CsDiagnosticHeaderConfiguration` cmdlet to return a collection of all the diagnostic header configuration settings currently in use.
That collection is piped to the `Where-Object` cmdlet, which selects only those settings where the SendToExternalNetworks property is equal to True.
That filtered collection is then piped to the `Set-CsDiagnosticHeaderConfiguration` cmdlet, which sets the value of the SendToOutsideUnauthenticatedUsers property for each item in the collection to True.


## PARAMETERS

### -Identity
Unique identifier for the diagnostic header configuration settings to be modified.
To modify settings configured at the site scope, use syntax similar to this: `-Identity "site:Redmond"`.
To modify settings configured at the service scope, use syntax like this: `-Identity "service:EdgeServer:atl-cs-001.litwareinc.com"`.
To modify the global settings, use this syntax: `-Identity global`.

If this parameter is not specified, then the `Set-CsDiagnosticHeaderConfiguration` cmdlet will automatically modify the global settings.


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SendToExternalNetworks
When set to True, diagnostic headers will be attached to messages sent to users on external networks (such as users in a federated domain).
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendToOutsideUnauthenticatedUsers
When set to True, diagnostic headers will be attached to messages sent to outside users.
Outside users are users who have connected from outside the internal network (for example, through a proxy server) and have not yet been authenticated.

The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -SendToExternalNetworksOnServiceEdge
When set to True, diagnostic headers will be attached to messages sent to networks on the service edge.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
The `Set-CsDiagnosticHeaderConfiguration` cmdlet accepts pipelined instances of the diagnostic header settings object.

## OUTPUTS

###  
The `Set-CsDiagnosticHeaderConfiguration` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticHeaderSettings object.

## NOTES

## RELATED LINKS

[Get-CsDiagnosticHeaderConfiguration](Get-CsDiagnosticHeaderConfiguration.md)

[New-CsDiagnosticHeaderConfiguration](New-CsDiagnosticHeaderConfiguration.md)

[Remove-CsDiagnosticHeaderConfiguration](Remove-CsDiagnosticHeaderConfiguration.md)
