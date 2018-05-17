---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsDiagnosticHeaderConfiguration
schema: 2.0.0
---

# Get-CsDiagnosticHeaderConfiguration

## SYNOPSIS
Returns information about the diagnostic header configuration settings currently in use in your organization.
Diagnostic header configuration settings determine whether SIP messages are accompanied by header information.
This information can be useful in troubleshooting and error reporting.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsDiagnosticHeaderConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsDiagnosticHeaderConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
When you send SIP (Session Initiation Protocol) messages, you have the option of attaching an ms-diagnostics header to each message.
This message (which is not visible to end users) contains information that might be useful in troubleshooting connection problems or in reporting errors.
For example, the diagnostic header might contain error codes that enable the client application (for example, Skype for Business) to take a predetermined course of action should a specific situation arise.

For SIP messages sent within your internal network, there's little reason not to include these diagnostic headers: they have a minimal impact on message size and can be an invaluable tool for administrators trying to troubleshoot connectivity problems.
However, diagnostic headers also contain information, such as the fully qualified domain names (FQDNs) of your SIP servers, that you might not want to make available to people outside the internal network.
Because of this, the diagnostic header configuration settings enable you to decide whether you want diagnostic headers sent to users on external networks (such as users in a federated domain) and/or to outside users.
(Outside users are users who have connected from outside the internal network and have not yet been authenticated.)

By default, headers are not included in messages sent either to external networks or to unauthenticated users.
However, you can modify the global diagnostic header settings to include headers to external networks and/or unauthenticated users.
Alternatively, you can create custom settings at the site scope or at the service scope (for the Edge Server or Registrar service).
That way, you can choose to include diagnostic headers on messages sent from one site, or through one Edge Server, while disallowing headers on messages sent from other sites or through other Edge Servers.

The Get-CsDiagnosticHeaderConfiguration cmdlet provides a way for you to retrieve information about the diagnostic header configuration settings currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDiagnosticHeaderConfiguration
```

The preceding command returns information about all the diagnostic header configuration settings currently in use in the organization.
This is done by calling the Get-CsDiagnosticHeaderConfiguration cmdlet without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsDiagnosticHeaderConfiguration -Identity site:Redmond
```

In Example 2, a single collection of diagnostic header configuration settings is returned: the collection that has the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsDiagnosticHeaderConfiguration -Filter "service:*"
```

The command shown in Example 3 returns all the diagnostic header settings that have been configured at the service scope.
This is done by calling the Get-CsDiagnosticHeaderConfiguration cmdlet and the Filter parameter; the filter value "service:*" ensures that the only settings that are returned are those that have an Identity that begins with the characters "service:".

### -------------------------- Example 4 --------------------------
```
Get-CsDiagnosticHeaderConfiguration | Where-Object {$_.SendToExternalNetworks -eq $True}
```

Example 4 returns all the diagnostic header configuration settings that allow sending to external networks.
To perform this task, the command first calls the Get-CsDiagnosticHeaderConfiguration cmdlet without any parameters; this returns a collection of all the diagnostic header settings currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the SendToExternalNetworks property is equal to True.

### -------------------------- Example 5 --------------------------
```
Get-CsDiagnosticHeaderConfiguration | Where-Object {$_.SendToExternalNetworks -eq $True -or $_.SendToOutsideUnauthenticatedUsers -eq $True}
```

The command shown in Example 5 returns information about the diagnostic header configuration settings that meet at least one of the following criteria: 1) the SendToExternalNetworks property is equal to True; and/or 2) the SendToOutsideUnauthenticatedUsers is equal to True.
To do this, the command first uses the Get-CsDiagnosticHeaderConfiguration cmdlet to return a collection of all the diagnostic header settings currently in use.
This collection is then piped to the Where-Object cmdlet, which picks out those settings where the SendToExternalNetworks property and/or the SendToOutsideUnauthenticatedUsers property is equal to True.

The -or operator specifies that, to be returned, settings only have to meet one of the specified criteria.
To require that settings meet both of the specified criteria, use the -and operator instead:

`Where-Object {$_.SendToExternalNetworks -eq $True -and $_.SendToOutsideUnauthenticatedUsers -eq $True}`


## PARAMETERS

### -Identity
Unique identifier for the diagnostic header configuration settings to be returned.
To return settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To return settings configured at the service scope, use syntax like this: -Identity "service:EdgeServer:atl-edge-001.litwareinc.com".
To return the global settings, use this syntax: -Identity global.

If this parameter is not specified, then all the diagnostic header configuration settings currently in use will be returned.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when specifying the settings collection (or collections) to be returned.
For example, this syntax returns all the settings configured at the site scope: -Filter "site:*".
This syntax returns all the settings configured at the service scope: -Filter "service:*".

Note that you cannot use both the Filter and the Identity parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the diagnostic header configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticHeaderSettings


## NOTES


## RELATED LINKS

[New-CsDiagnosticHeaderConfiguration](New-CsDiagnosticHeaderConfiguration.md)

[Remove-CsDiagnosticHeaderConfiguration](Remove-CsDiagnosticHeaderConfiguration.md)

[Set-CsDiagnosticHeaderConfiguration](Set-CsDiagnosticHeaderConfiguration.md)

