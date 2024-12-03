---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
online version:
title: Get-CsSdgBulkSignInRequestStatus
schema: 2.0.0
---

# Get-CsSdgBulkSignInRequestStatus

## SYNOPSIS
Get the status of an active bulk sign in request.

## SYNTAX

```
Get-CsSdgBulkSignInRequestStatus -Batchid <String> [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to get granular device level details of a bulk sign in request. Status is shown for every username and hardware ID pair included in the device details CSV used as input to the bulk sign in request.

## EXAMPLES

### Example 1
```powershell
$newBatchResponse = New-CsSdgBulkSignInRequest -DeviceDetailsFilePath .\Example.csv -Region APAC
$newBatchResponse.BatchId
$getBatchStatusResponse = Get-CsSdgBulkSignInRequestStatus -Batchid $newBatchResponse.BatchId
$getBatchStatusResponse | ft
$getBatchStatusResponse.BatchItem
```

This example shows how to read the batch status response into a new variable and print the status for every batch item.

## PARAMETERS

### -Batchid
Batch ID is the response returned by the `New-CsSdgBulkSignInRequest` cmdlet. It is used as input for querying the status of the batch through `Get-CsSdgBulkSignInRequestStatus` cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.ISdgBulkSignInRequestStatusResult

## NOTES

## RELATED LINKS
