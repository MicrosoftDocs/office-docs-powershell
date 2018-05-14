---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsFileTransferFilterConfiguration
schema: 2.0.0
---

# Get-CsFileTransferFilterConfiguration

## SYNOPSIS
Returns the file transfer filter configurations in your organization.
These configurations are used to block a user's ability to transfer certain types of files (for example, files with a .vbs or .ps1 file extension) using a Skype for Business Server client.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsFileTransferFilterConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsFileTransferFilterConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
When sending instant messages, users can attach and send files to the other participants in the conversation.
Skype for Business Server can be configured so that files with certain extensions--typically extensions of file types that could potentially prove harmful--are not allowed to be sent using the Skype for Business Server client.

The Get-CsFileTransferFilterConfiguration cmdlet provides a way for you to retrieve a particular collection of settings (these settings can be configured at the global scope or at the site scope).
File transfer filter configurations include the list of file extensions that are blocked from transfers, to what degree filtering is enabled (all file transfers are blocked or only files with the specified extensions), and whether file transfer filtering is enabled.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsFileTransferFilterConfiguration
```

The command shown in Example 1 returns a collection of all the file transfer filter configurations in use in your organization.
This is the default behavior any time you call the Get-CsFileTransferFilterConfiguration cmdlet without any additional parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsFileTransferFilterConfiguration -Identity site:Redmond
```

Example 2 returns a single file transfer filter configuration: the configuration that has the Identity site:Redmond.
Because identities must be unique, this command can never return more than one configuration.

### -------------------------- Example 3 --------------------------
```
Get-CsFileTransferFilterConfiguration -Filter site:*

```

Example 3 uses the Filter parameter to return a collection of all the file transfer filter configurations at the site level.
The Filter value "site:*" instructs the Get-CsFileTransferFilterConfiguration cmdlet to return only those configurations that have an Identity that begins with the string value "site:".

### -------------------------- Example 4 --------------------------
```
Get-CsFileTransferFilterConfiguration | Where-Object {$_.Extensions -contains ".xls"}
```

The command shown in Example 4 returns only those file transfer filter configurations that include .xls in their list of prohibited file extensions.
To do this, the Get-CsFileTransferFilterConfiguration cmdlet is first used to return a collection of all the configurations in use in your organization.
That collection is then piped to the Where-Object cmdlet, which applies a filter that restricts the returned data to those configurations where the Extensions property includes (-contains) the string value ".xls".

### -------------------------- Example 5 --------------------------
```
Get-CsFileTransferFilterConfiguration | Where-Object {$_.Enabled -eq $False}
```

Example 5 returns all the file transfer filter configurations that are currently disabled.
To accomplish this task, the Get-CsFileTransferFilterConfiguration cmdlet is used to return a collection of all the configurations in use in your organization.
This collection is then piped to the Where-Object cmdlet, which, in turn, selects only those configuration where the Enabled property is equal to (-eq) False ($False).

### -------------------------- Example 6 --------------------------
```
Get-CsFileTransferFilterConfiguration -Identity Global | Select-Object -ExpandProperty Extensions
```

Example 6 shows a complete list of the file extensions prohibited by the global file transfer filter configuration.
The command begins with a call to the Get-CsFileTransferFilterConfiguration cmdlet, specifying the Global configuration.
The returned information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the Extensions property.
That results in the complete list of file extensions being displayed on the screen, one file extension per line.


## PARAMETERS

### -Identity
Unique identifier for the file transfer filter configuration you want to retrieve.
To refer to the global settings, use this syntax: -Identity global.
To refer to settings configured at the site scope, use syntax similar to this: -Identity site:Redmond.
Note that you cannot use wildcard values when specifying an Identity.
If you want to use wildcards, use the Filter parameter instead.

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

### -Filter
Enables you to use wildcards when specifying the file transfer filter configurations to be returned.
For example, to return all the file transfer filter configurations at the site scope, use this syntax: -Filter "site:*".
By design, file transfer filter configurations that have an Identity (the only property you can filter for) that begins with the string value "site:" were configured at the site scope.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the file transfer filter configuration from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.ImFilter.FileTransferFilterConfiguration


## NOTES


## RELATED LINKS

[New-CsFileTransferFilterConfiguration](New-CsFileTransferFilterConfiguration.md)

[Remove-CsFileTransferFilterConfiguration](Remove-CsFileTransferFilterConfiguration.md)

[Set-CsFileTransferFilterConfiguration](Set-CsFileTransferFilterConfiguration.md)
