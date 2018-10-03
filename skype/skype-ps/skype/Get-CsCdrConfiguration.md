---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsCdrConfiguration
schema: 2.0.0
---

# Get-CsCdrConfiguration

## SYNOPSIS
Returns information about your call detail recording (CDR) settings.
CDR enables you to track usage of such things as peer-to-peer instant messaging sessions, Voice over Internet Protocol (VoIP) phone calls, and conferencing calls.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsCdrConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsCdrConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Call detail recording (CDR) provides a way for you to track usage of Skype for Business Server capabilities such as Voice over IP (VoIP) phone calls; instant messaging (IM); file transfers; audio/video (A/V) conferencing; and application sharing sessions.
CDR (which is available only if you have deployed the Monitoring service) keeps usage information: it logs information such as the parties involved in the call; the length of the call; and whether or not any files were transferred.
(However, CDR does not make a recording of the call itself.)

CDR also keeps track of call error information: detailed diagnostic data for both peer-to-peer sessions and for conferencing calls.

As an administrator, you can determine whether or not CDR is used in your organization.
If the Monitoring service has been deployed, you can enable or disable CDR.
In addition, you can make this decision globally (in which case CDR will either be enabled or disabled throughout the organization) or on a site-by-site basis; for example, you could use CDR in the Redmond site but not use CDR in the Paris site.

The Get-CsCdrConfiguration cmdlet provides a way for you return detailed information about how CDR is used in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsCdrConfiguration
```

This example uses the Get-CsCdrConfiguration cmdlet to return a collection of all the CDR settings configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsCdrConfiguration -Identity site:Redmond
```

Example 2 uses the Identity parameter to return a single collection of CDR settings: the settings with the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsCdrConfiguration -Filter site:*
```

In Example 3, the Filter parameter is employed to return all the CDR settings that have been configured at the site scope.
The filter value "site:*" returns all the CDR settings that have an Identity that begins with the string value "site:".
By definition, those are settings that have been configured at the site scope.

### -------------------------- Example 4 --------------------------
```
Get-CsCdrConfiguration | Where-Object {$_.KeepCallDetailForDays -lt 30}
```

Example 4 returns a collection of all the CDR settings where the KeepCallDetailForDays property is fewer than 30 days.
To do this, the command first uses the Get-CsCdrConfiguration cmdlet to return a collection of all the CDR settings configured in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the KeepCallDetailForDays value is less than 30 days.


## PARAMETERS

### -Identity
Indicates the unique identifier for the collection of CDR configuration settings you want to return.
To refer to the global settings, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.
Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards then use the Filter parameter instead.

If this parameter is not specified then the Get-CsCdrConfiguration cmdlet returns a collection of all the CDR configuration settings currently in use in the organization.

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
Enables you to use wildcard characters in order to return a collection of CDR configuration settings.
For example, to return a collection of all the settings configured at the site scope, use this syntax: -Filter site:*.
To return a collection of all the settings that have the string value "Western" somewhere in their Identity, use this syntax: -Filter *Western*.

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
Retrieves the CDR configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.CallDetailRecording.CdrSettings


## NOTES


## RELATED LINKS

[New-CsCdrConfiguration](New-CsCdrConfiguration.md)

[Remove-CsCdrConfiguration](Remove-CsCdrConfiguration.md)

[Set-CsCdrConfiguration](Set-CsCdrConfiguration.md)

