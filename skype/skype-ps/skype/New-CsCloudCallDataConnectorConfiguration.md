---
external help file: Microsoft.Rtc.Management.dll-Help.xml
applicable: Skype for Business Server 2019
title: New-CsCloudCallDataConnectorConfiguration
online version:
schema: 2.0.0
---

# New-CsCloudCallDataConnectorConfiguration

## SYNOPSIS
Creates a new set of Cloud Call Data Connector configuration settings.

## SYNTAX

```
New-CsCloudCallDataConnectorConfiguration [-EnableCallDataConnector <Boolean>] [-Identity] <XdsIdentity>
 [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Call Data Connector greatly simplifies call monitoring in a hybrid environment because you no longer need to use different sets of on-premises and online tools to monitor all of your users' call quality. Whether your users are homed on premises or online, you can choose to view call quality for your entire organization online.

With Call Data Connector, the Skype for Business Server pushes call data to the cloud service so that you can leverage the Skype for Business Online Call Analytics (CA) and Call Quality Dashboard (CQD) tools.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsCloudCallDataConnectorConfiguration -Identity site:Redmond -EnableCallDataConnector $True
```

The command in Example 1 uses the New-CsCloudCallDataConnectorConfiguration cmdlet to create a new set of Cloud Call Data Connector configuration settings with the Identity site:Redmond. In addition to the Identity site:Redmond, the new settings also have the EnableCallDataConnector property set to True. Because site settings take precedence over global settings, this means that Call Data Connector will be used in the Redmond site, regardless of whether Call Data Connector has been enabled at the global scope.

### EXAMPLE 2
```powershell
$x = New-CsCloudCallDataConnectorConfiguration -Identity site:Redmond -InMemory

$x.EnableCallDataConnector = $False

Set-CsCloudCallDataConnectorConfiguration -Instance $x
```

Example 2 uses the InMemory parameter to demonstrate how you can create a new collection of Cloud Call Data Connector configuration settings that initially exist only in memory.
To do this, the example first uses the New-CsCloudCallDataConnectorConfiguration cmdlet and the InMemory parameter to create a virtual collection of settings with the Identity site:Redmond.
This virtual collection is stored in the variable $x; if the collection was not stored in a variable, it would be created and then immediately disappear.

After the virtual collection has been created, the command shown in line 2 sets the value of the EnableCallDataConnector property to False ($False).
In line 3, the Set-CsCdrConfiguration cmdlet is then used to transform the virtual collection $x into an actual collection of Cloud Call Data Connector configuration settings that is applied to the Redmond site.
If the Set-CsCloudCallDataConnectorConfiguration cmdlet was not called, the virtual collection would disappear as soon as the Windows PowerShell session was terminated or the variable $x was deleted.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableCallDataConnector
Enables upload of call data (CDR and QoE).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Server 2019
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
applicable: Skype for Business Server 2019
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
Parameter Sets: (All)
Aliases:
applicable: Skype for Business Server 2019
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-<cmdlet>.

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
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

### Creates instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CallDataConnectorConfiguration object.

## NOTES

## RELATED LINKS
