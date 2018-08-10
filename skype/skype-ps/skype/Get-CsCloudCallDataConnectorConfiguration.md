---
external help file: Microsoft.Rtc.Management.dll-Help.xml
applicable: Skype for Business Server 2019
title: Get-CsCloudCallDataConnectorConfiguration
online version:
schema: 2.0.0
---

# Get-CsCloudCallDataConnectorConfiguration

## SYNOPSIS
Returns information about the Cloud Call Data Connector configuration settings currently in use in the organization.

## SYNTAX

### Identity (Default)
```
Get-CsCloudCallDataConnectorConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsCloudCallDataConnectorConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Call Data Connector greatly simplifies call monitoring in a hybrid environment because you no longer need to use different sets of on-premises and online tools to monitor all of your users' call quality. Whether your users are homed on premises or online, you can choose to view call quality for your entire organization online.

With Call Data Connector, the Skype for Business Server pushes call data to the cloud service so that you can leverage the Skype for Business Online Call Analytics (CA) and Call Quality Dashboard (CQD) tools.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsCloudCallDataConnectorConfiguration
```

Example 1 returns information about all the CloudCallDataConnector configuration settings currently in use in the organization.

### Example 2
```powershell
Get-CsCloudCallDataConnectorConfiguration -Identity site:Redmond
```

Example 2 uses the Identity parameter to return a single collection of CloudCallDataConnector configuration settings: the settings with the Identity site:Redmond.

### Example 3
```powershell
Get-CsCloudCallDataConnectorConfiguration -Filter site:*
```

In Example 3, the Filter parameter is employed to return all the CloudCallDataConnector configuration settings that have been configured at the site scope.
The filter value "site:*" returns all the CloudCallDataConnector configuration settings that have an Identity that begins with the string value "site:".
By definition, those are settings that have been configured at the site scope.

### Example 4
```powershell
Get-CsCloudCallDataConnectorConfiguration | Where-Object {$_.EnableCallDataConnector -eq $True}
```

Example 4 returns a collection of all the CloudCallDataConnector configuration settings where the EnableCallDataConnector property is set to $True.
To do this, the command first uses the Get-CsCdrConfiguration cmdlet to return a collection of all the CloudCallDataConnector configuration settings configured in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableCallDataConnector value is set to $True.

## PARAMETERS

### -Filter
Enables you to use wildcard characters to return a collection of CloudCallDataConnector configuration settings.
For example, to return a collection of all the settings configured at the site scope, use this syntax: -Filter site:*.
To return a collection of all the settings that have the string value "Western" somewhere in their Identity, use this syntax: -Filter Western .

```yaml
Type: String
Parameter Sets: Filter
Aliases:
applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the unique identifier for the collection of CloudCallDataConnector configuration settings you want to return.
To refer to the global settings, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.
Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, use the Filter parameter instead.

If this parameter is not specified, the Get-CsCloudCallDataConnectorConfiguration cmdlet returns a collection of all the CloudCallDataConnector configuration settings currently in use in the organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:
applicable: Skype for Business Server 2019
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the CloudCallDataConnector configuration data from the local replica of the Central Management store, rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.CallDataConnectorConfiguration

## NOTES

## RELATED LINKS
