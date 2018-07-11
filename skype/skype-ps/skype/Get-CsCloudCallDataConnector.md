---
external help file: Microsoft.Rtc.Management.dll-Help.xml
Module Name: SkypeForBusiness
online version:
schema: 2.0.0
---

# Get-CsCloudCallDataConnector

## SYNOPSIS
Returns information about your Call Data Connector.

## SYNTAX

```
Get-CsCloudCallDataConnector [[-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Call Data Connector provides a single view in a hybrid environment where you can view the on-premises and online call quality data in one place.

The Get-CsCloudCallDataConnector cmdlet provides a way for you to view the on-premises copy of the cloud connection information created by the New-CsCloudCallDataConnection cmdlet. This outputs the Office 365 TenantID and the data ingestion token for Call Data Connector telemetry endpoint.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsCloudCallDataConnector
```

This example returns the CloudCallDataConnector settings stored on-premises. Note that there is only a single, global instance of CloudCallDataConnector settings.

## PARAMETERS

### -LocalStore
Retrieves the Call Data Connector data from the local replica of the Central Management store, rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.CloudCallDataConnection

## NOTES

## RELATED LINKS
