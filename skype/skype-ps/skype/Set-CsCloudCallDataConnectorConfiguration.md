---
external help file: Microsoft.Rtc.Management.dll-Help.xml
Module Name: SkypeForBusiness
online version:
schema: 2.0.0
---

# Set-CsCloudCallDataConnectorConfiguration

## SYNOPSIS
Modifies an existing collection of Cloud Call Data Connector configuration settings.

## SYNTAX

### Identity (Default)
```
Set-CsCloudCallDataConnectorConfiguration [-EnableCallDataConnector <Boolean>] [[-Identity] <XdsIdentity>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsCloudCallDataConnectorConfiguration [-EnableCallDataConnector <Boolean>] [-Instance <PSObject>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Call Data Connector greatly simplifies call monitoring in a hybrid environment because you no longer need to use different sets of on-premises and online tools to monitor all of your users' call quality. Whether your users are homed on premises or online, you can choose to view call quality for your entire organization online.

With Call Data Connector, the Skype for Business Server pushes call data to the cloud service so that you can leverage the Skype for Business Online Call Analytics (CA) and Call Quality Dashboard (CQD) tools.

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsCloudCallDataConnectorConfiguration -Identity site:Redmond -EnableCallDataConnector $False
```

Example 1 disables the Call Data Connector for site:Redmond.

### Example 2
```powershell
Get-CsCloudCallDataConnectorConfiguration | Set-CsCloudCallDataConnectorConfiguration -EnableCallDataConnector $True
```

Example 2 is a variation of the command shown in Example 1.
In this case, the EnableCallDataConnector property is modified for each collection of Cloud Call Data Connector configuration settings currently in use in the organization.
To do this, the command first calls the \`Get-CsCloudCallDataConnectorConfiguration\` cmdlet without any parameters in order to return a collection of all the Cloud Call Data Connector settings currently in use.
This collection is then piped to the \`Set-CsCloudCallDataConnectorConfiguration\` cmdlet, which takes each item in the collection and changes the value of the EnableCallDataConnector property to $True.

### Example 3
```powershell
Get-CsCloudCallDataConnectorConfiguration -Filter "site:*"| Set-CsCloudCallDataConnectorConfiguration -EnableCallDataConnector $True
```

Another variation of the command used in Example 1 is shown in Example 3.
In this example, the PurgeHourOfDay property is changed for all the Cloud Call Data Connector settings that have been configured at the site scope.
To perform this task, the command first calls the \`Get-CsCloudCallDataConnectorConfiguration\` cmdlet along with the Filter parameter; the filter value "site:*" ensures that only Cloud Call Data Connector settings that have an Identity that begins with the string value "site:" will be returned.
The filtered collection is then piped to the \`Set-CsCloudCallDataConnectorConfiguration\` cmdlet, which changes the EnableCallDataConnector property for each item in that collection.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableCallDataConnector
Enables upload of call data.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Represents the unique identifier to be assigned to the new collection of CloudCallDataConnector configuration settings. Because you can only create new collections at the site scope, the Identity will always be the prefix "site:" followed by the site name; for example, "site:Redmond".

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet, rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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

### The \`Set-CsCloudCallDataConnectorConfiguration\` cmdlet does not return a value or object. Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CloudCallDataConnection object.

## NOTES

## RELATED LINKS
