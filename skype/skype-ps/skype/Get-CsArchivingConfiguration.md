---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsArchivingConfiguration
schema: 2.0.0
---

# Get-CsArchivingConfiguration

## SYNOPSIS
Returns information about how (or if) instant messaging (IM) sessions are archived in your organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsArchivingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsArchivingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Many organizations find it useful to keep a transcript of all the IM sessions carried out by their users (or a selected subset of users).
For other organizations, it's mandatory to keep such transcripts.
For example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

Skype for Business Server gives you flexibility when it comes to archiving IM and web conferencing sessions.
If you have deployed Archiving Server, you can use the various CsArchivingConfiguration cmdlets to enable and disable instant message archiving and to manage your archiving database.
You can also suspend IM should archiving fail; this helps to ensure that you keep a record of all your electronic communications.

In order to archive IM sessions, you must set up at least one Archiving Server.
After the Archiving Server is set up, you must perform two additional steps.
First, you need to enable archiving at the appropriate scope (for details, see the Set-CsArchivingConfiguration cmdlet help topic).
This might be the global scope; however, you can also configure custom archiving settings for different sites.

Second, you must use archiving policies to indicate which users will have their IM sessions archived.
What happens if you enable archiving but do not assign any users a policy that specifies that their IM sessions should be archived?
Literally, nothing happens: IM sessions will not be archived unless a policy is in force that requires IM sessions to be archived.

With the Get-CsArchivingConfiguration cmdlet, you can determine how IM session archiving has been configured in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsArchivingConfiguration
```

The command shown in Example 1 returns a collection of all the archiving configuration settings in use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsArchivingConfiguration -Identity site:Redmond
```

In Example 2, the Identity parameter is used to limit the returned collection of archiving configuration settings to those settings that have the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsArchivingConfiguration -Filter site:*
```

In Example 3, the Filter parameter is used to limit the returned collection of archiving configuration settings to settings that have been configured at the site scope.
The parameter value "site:*" limits the returned items to those that have an Identity that starts with the string value "site:".

### -------------------------- Example 4 --------------------------
```
Get-CsArchivingConfiguration | Where-Object {$_.EnableArchiving -ne "None"}
```

This example uses the Get-CsArchivingConfiguration cmdlet to return a collection of all the archiving configuration settings that have been enabled for use in your organization.
To do that, the command first calls the Get-CsArchivingConfiguration cmdlet without any parameters in order to return a collection of all your archiving configuration settings.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to those collections where the EnableArchiving property is not equal to "None".
If EnableArchiving is set to "None", archiving has been disabled.
If this property is set to any other value (either "IMOnly" or "ImAndWebConf") that means that archiving has been enabled.


## PARAMETERS

### -Identity
Indicates the unique identifier for the collection of archiving settings you want to return.
To refer to the global settings use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.
To return information about the settings assigned to an individual Registrar pool use syntax: like this:

`-Identity "service:Registrar:atl-cs-001.litwareinc.com"`

Pool-level settings are available only in Skype for Business Server.

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

If this parameter is not specified, then the Get-CsArchivingConfiguration cmdlet returns a collection of all the archiving configuration settings in use in the organization.

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
Enables you to use wildcard characters in order to return a collection (or collections) of archiving configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax: -Filter site:*.
To return a collection of all the settings that have the string value "Canada" somewhere in their Identity (the only property you can filter on) use this syntax: -Filter "*Canada*".

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
Retrieves the archiving configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings


## NOTES


## RELATED LINKS

[New-CsArchivingConfiguration](New-CsArchivingConfiguration.md)

[Remove-CsArchivingConfiguration](Remove-CsArchivingConfiguration.md)

[Set-CsArchivingConfiguration](Set-CsArchivingConfiguration.md)

[Set-CsArchivingServer](Set-CsArchivingServer.md)

