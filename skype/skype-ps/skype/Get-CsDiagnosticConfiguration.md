---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsDiagnosticConfiguration
schema: 2.0.0
---

# Get-CsDiagnosticConfiguration

## SYNOPSIS
Returns information about the diagnostic configuration settings currently in use in your organization.
Diagnostic configuration settings are used to determine whether traffic to or from a given domain or Uniform Resource Identifier (URI) is recorded in your Skype for Business Server log files.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsDiagnosticConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsDiagnosticConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
If you enable logging for Skype for Business Server, then, by default, traffic traveling to or from any domain or URI is included in those log files.
This ensures that as much information as possible is recorded in the log files.

However, this can occasionally result in too much information.
For example, if you are experiencing connectivity problems with a particular domain, you might want to limit logging to traffic between your network and that domain; that makes it easier for you to identify the relevant records and, in turn, might make it easier for you to diagnose and correct the problem.

Diagnostic configuration settings make it possible for you to specify the domains or URIs that will be recorded in the log files.
Skype for Business Server 2015 enables you to create diagnostic configuration settings at the site scope.
In turn, this enables you to apply different settings to the Redmond site while than you do on your other sites.

The Get-CsDiagnosticConfiguration cmdlet enables you to return information about the diagnostic configuration settings currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDiagnosticConfiguration
```

In Example 1, information is returned for all of the diagnostic configuration settings currently in use in the organization.
This is done by calling the Get-CsDiagnosticConfiguration cmdlet without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsDiagnosticConfiguration -Identity site:Redmond
```

Example 2 returns information for the diagnostic configuration settings applied to the Redmond site (-Identity site:Redmond).

### -------------------------- Example 3 --------------------------
```
Get-CsDiagnosticConfiguration -Identity site:Redmond | Select-Object -ExpandProperty Filter
```

The command shown in Example 3 displays the information about the individual filters contained within the diagnostic configuration settings for the Redmond site.
To do this, the command first uses the Get-CsDiagnosticConfiguration cmdlet to return the settings for the Redmond site.
This information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Filter property.
Expanding the Filter property enables you to access the properties and property values for the individual filters maintained in the diagnostic configuration settings.

### -------------------------- Example 4 --------------------------
```
Get-CsDiagnosticConfiguration -Identity global | Select-Object -ExpandProperty Filter | Where-Object {$_.Uri -contains "sip:diagnostics@litwareinc.com"}
```

The command shown in Example 4 returns a subset of the filters found in the global diagnostic configuration settings; in particular, it returns filters where the Uri property includes the SIP address sip:diagnostics@litwareinc.com.
To do this, the command first uses the Get-CsDiagnosticConfiguration cmdlet to return all the filter information for the global instance of the diagnostic configuration settings.
This information is then piped to the Select-Object cmdlet, which expands the Filter property.
The individual filter objects are then piped to the Select-Object cmdlet, which extracts only those filters where the Uri property includes the SIP address sip:diagnostics@litwareinc.com.

### -------------------------- Example 5 --------------------------
```
Get-CsDiagnosticConfiguration -Identity global | Select-Object -ExpandProperty Filter | Where-Object {$_.Uri -notcontains "sip:diagnostics@litwareinc.com"}
```

Example 5 is a variation of the command shown in Example 4; in Example 5, however, filters are returned only if the Uri property does not include the SIP address sip:diagnostics@litwareinc.com.
To carry out this task, the command calls the Get-CsDiagnosticConfiguration cmdlet to return all the diagnostic configuration information for the global instance of the configuration settings.
This information is then piped to the Select-Object cmdlet, which expands the Filter property.
Those filter objects are then piped to the Select-Object cmdlet, which selects only those filters where the Uri property does not include the SIP address sip:diagnostics@litwareinc.com.


## PARAMETERS

### -Identity
Unique identifier for the diagnostic configuration settings to be returned.
To return settings configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
To return the global settings, use this syntax: -Identity global.

If this parameter is not specified, then all of the diagnostics configuration settings currently in use will be returned.

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
Retrieves the diagnostic configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.Diagnostics.DiagnosticFilterSettings


## NOTES


## RELATED LINKS

[New-CsDiagnosticConfiguration](New-CsDiagnosticConfiguration.md)

[Remove-CsDiagnosticConfiguration](Remove-CsDiagnosticConfiguration.md)

[Set-CsDiagnosticConfiguration](Set-CsDiagnosticConfiguration.md)

