---
external help file: Microsoft.Rtc.Management.dll-Help.xml
Module Name: SkypeForBusiness
online version:
schema: 2.0.0
---

# Set-CsCloudCallDataConnector

## SYNOPSIS
Saves an on-premises copy of the connection information created by the New-CsCloudCallDataConnection cmdlet.

## SYNTAX

### Instance
```
Set-CsCloudCallDataConnector [-Token <String>] [-TenantId <String>] [-Instance <PSObject>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Call Data Connector provides a single view in a hybrid environment where you can view the on-premises and online call quality data in one place.

The Set-CsCloudCallDataConnector cmdlet provides a way for you to store an on-premise copy of the cloud connection information created by the New-CsCloudCallDataConnection cmdlet.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsCloudCallDataConnection | Set-CsCloudCallDataConnector -TenantId &lt;tenant_id&gt;
```

If you're logged in to Skype for Business Online Powershell within the Skype for Business Server Management Shell 2019, this command in example 1 takes the output of the New-CsCloudCallDataConnection online cmdlet and passes it to the Set-CsCloudCallDataConnector cmdlet via pipeline so that the Token can be stored on premises. Along with the Token, the TenantId of your O365 tenant will get stored on premises as well.

### Example 2
Example showing the scenario when we aren't piping the output from online cmdlet.

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

### -TenantId
Office 365 TenantID of your tenant.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Token
Data ingestion token for CloudCallDataConnector telemetry endpoint.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### System.String
Microsoft.Rtc.Management.WritableConfig.Settings.CloudCallDataConnection. The \`Set-CsCloudCallDataConnector\` cmdlet accepts pipelined input of CloudCallDataConnection.


## OUTPUTS

### The \`Set-CsCloudCallDataConnector\` cmdlet does not return a value or object. Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.CloudCallDataConnection object.

## NOTES

## RELATED LINKS
