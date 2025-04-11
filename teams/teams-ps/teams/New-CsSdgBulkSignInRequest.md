---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
online version:
title: New-CsSdgBulkSignInRequest
schema: 2.0.0
---

# New-CsSdgBulkSignInRequest

## SYNOPSIS
Use the New-CsSdgBulkSignInRequest cmdlet to sign in a batch of up to 100 devices.

## SYNTAX

```
New-CsSdgBulkSignInRequest -DeviceDetailsFilePath <String> -Region <String> [<CommonParameters>]
```

## DESCRIPTION
Bulk Sign In for Teams SIP Gateway enables you to sign in a batch of devices in one go. This feature is intended for admins and works for shared devices.
The password for the shared device account is reset at runtime to an unknown value and the cmdlet uses the new credential for fetching token from Entra ID. Admins can sign in shared account remotely and in bulk using this feature.

## EXAMPLES

### Example 1
```powershell
Import-Module MicrosoftTeams
$credential = Get-Credential   // Enter your admin's email and password
Connect-MicrosoftTeams -Credential $credential
$newBatchResponse = New-CsSdgBulkSignInRequest -DeviceDetailsFilePath .\Example.csv -Region APAC
```

This example shows how to connect to Microsoft Teams PowerShell module, and read the output of the New-SdgBulkSignInRequest cmdlet into a variable newBatchResponse. The cmdlet uses Example.csv as the device details file, and SIP Gateway region as APAC.

### Example 2
```powershell
$newBatchResponse = New-CsSdgBulkSignInRequest -DeviceDetailsFilePath  .\Example.csv -Region APAC
$newBatchResponse.BatchId
$getBatchStatusResponse = Get-CsSdgBulkSignInRequestStatus -Batchid $newBatchResponse.BatchId
$getBatchStatusResponse | ft
$getBatchStatusResponse.BatchItem
```
This example shows how to view the status of a bulk sign in batch.

## PARAMETERS

### -DeviceDetailsFilePath
This is the path of the device details CSV file. The CSV file contains two columns - username and hardware ID, where username is of the format FirstFloorLobbyPhone1@contoso.com and hardware ID is the device MAC address in the format 1A-2B-3C-4D-5E-6F

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

### -Region
This is the SIP Gateway region. Possible values include NOAM, EMEA, APAC.

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

### System.Object

## NOTES

## RELATED LINKS
