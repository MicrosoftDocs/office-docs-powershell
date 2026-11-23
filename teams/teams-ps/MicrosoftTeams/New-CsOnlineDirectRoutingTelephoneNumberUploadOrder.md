---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinedirectroutingtelephonenumberuploadorder
schema: 2.0.0
title: New-CsOnlineDirectRoutingTelephoneNumberUploadOrder
---

# New-CsOnlineDirectRoutingTelephoneNumberUploadOrder

## SYNOPSIS
This cmdlet creates a request to upload Direct Routing telephone numbers to Microsoft Teams telephone number management inventory.

## SYNTAX

### InputByList (Default)
```
New-CsOnlineDirectRoutingTelephoneNumberUploadOrder 
    [-TelephoneNumber <String>] 
    [-LocationId <String>]
    [-AcquiredCapability <String>] 
    [-NetworkSiteId <String>] 
    [-ReverseNumberLookup <String>] 
    [-Tag <String>]
    [<CommonParameters>]
```

### InputByRange
```
New-CsOnlineDirectRoutingTelephoneNumberUploadOrder 
    [-LocationId <String>] 
    [-AcquiredCapability <String>]
    [-NetworkSiteId <String>] 
    [-ReverseNumberLookup <String>] 
    [-Tag <String>]
    [-StartingNumber <String>] 
    [-EndingNumber <String>]
    [<CommonParameters>]
```

### InputByFile
```
New-CsOnlineDirectRoutingTelephoneNumberUploadOrder 
    [-FileContent <Byte[]>] 
    [<CommonParameters>]
```


## DESCRIPTION
This cmdlet uploads Direct Routing telephone numbers to Microsoft Teams telephone number management inventory. Once uploaded the phone numbers will be visible in Teams PowerShell as acquired Direct Routing phone numbers. The output of the cmdlet is the "orderId" of the asynchronous Direct Routing Number creation operation. Each upload request supports a maximum of 10,000 telephone numbers, including CSV uploads with additional attributes. Split larger lists into separate upload requests of no more than 10,000 numbers each.

The cmdlet is an asynchronous operation and will return an OrderId as output. You can use the [Get-CsOnlineTelephoneNumberOrder](./get-csonlinetelephonenumberorder.md) cmdlet to check the status of the OrderId, including any error or warning messages that might result from the operation: `Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId "orderId"`.

A telephone number can be uploaded by itself or with associated attributes. When uploading a range telephone numbers, attributes are applied equally to all the numbers in range. If the telephone number is already in Microsoft Teams database, the upload may fail.

> [!NOTE]
> CSV uploads that include additional telephone number attributes are supported in Teams PowerShell but aren't yet available in the Teams admin center. Use Teams PowerShell to upload numbers with these attributes.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsOnlineDirectRoutingTelephoneNumberUploadOrder -TelephoneNumber "+123456789"
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, a new Direct Routing telephone number "+123456789" is being uploaded to Microsoft Teams telephone number management inventory. The output of the cmdlet is the OrderId that can be used with the [Get-CsOnlineTelephoneNumberOrder](./get-csonlinetelephonenumberorder.md) cmdlet to retrieve the status of the order: `Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId "orderId"`.

### Example 2
```powershell
PS C:\> New-CsOnlineDirectRoutingTelephoneNumberUploadOrder -TelephoneNumber "+123456789,+134567890,+145678901"
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c14
```

In this example, a list of telephone numbers is being uploaded to Microsoft Teams telephone number management inventory. The output of the cmdlet is the OrderId that can be used with the [Get-CsOnlineTelephoneNumberOrder](./get-csonlinetelephonenumberorder.md) cmdlet to retrieve the status of the order: `Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId "orderId"`.

### Example 3
```powershell
PS C:\> New-CsOnlineDirectRoutingTelephoneNumberUploadOrder -StartingNumber "+12000000" -EndingNumber "+12000009"
cdf3073a-6fbb-4ade-a8af-e8fa1f3b9c13
```

In this example, a range of Direct Routing telephone numbers from "+12000000" to "+12000009" are being uploaded to Microsoft Teams telephone number management inventory. The output of the cmdlet is the OrderId that can be used with the [Get-CsOnlineTelephoneNumberOrder](./get-csonlinetelephonenumberorder.md) cmdlet to retrieve the status of the order: `Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId "orderId"`.

### Example 4

This example uploads Direct Routing telephone numbers from a CSV file without additional attributes.

Create a comma-separated CSV file with a `TelephoneNumber` header and one telephone number per row.

Before running the example, replace the sample numbers with your Direct Routing telephone numbers and set `$csvPath` to a file in an existing folder on your computer. The example creates or overwrites that file using UTF-8 encoding. If you use a spreadsheet editor, format the telephone number column as text to preserve the leading `+` sign.

After connecting to Microsoft Teams with [Connect-MicrosoftTeams](./Connect-MicrosoftTeams.md), create the CSV file from a PowerShell here-string, read the file as a byte array, and pass its contents to `-FileContent`:

```powershell
$csvPath = "C:\Temp\DrNumber.csv"
$csvContent = @'
TelephoneNumber
+12065550100
+12065550101
'@

Set-Content -LiteralPath $csvPath -Value $csvContent -Encoding UTF8 -ErrorAction Stop
$drlist = [System.IO.File]::ReadAllBytes($csvPath)
$orderId = New-CsOnlineDirectRoutingTelephoneNumberUploadOrder -FileContent $drlist
Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId $orderId
```

The upload runs asynchronously. The returned OrderId identifies the request; it doesn't indicate that the upload has completed. Run [Get-CsOnlineTelephoneNumberOrder](./Get-CsOnlineTelephoneNumberOrder.md) again to check progress and review any errors or warnings. Each upload can contain up to 10,000 telephone numbers.

### Example 5

This example uploads Direct Routing telephone numbers with different attributes for each number. Use Teams PowerShell module version 7.9.0 or later.

Create a comma-separated CSV file using the following column names. Column names are case-sensitive. Use the plural names `Tags` and `AcquiredCapabilities` in the file, not the singular PowerShell parameter names `Tag` and `AcquiredCapability`.

| Column | Required | Description |
| --- | --- | --- |
| `TelephoneNumber` | Yes | The Direct Routing telephone number to upload. Include one number per row. |
| `LocationId` | No | The location ID to associate with the number. Retrieve a location ID with [Get-CsOnlineLisLocation](./Get-CsOnlineLisLocation.md). |
| `Tags` | No | Tags to assign or create for the number. Separate multiple tags with semicolons (`;`), for example, `Seattle;Reception`. |
| `AcquiredCapabilities` | No | Capabilities for the number: `ConferenceAssignment`, `VoiceApplicationAssignment`, `UserAssignment`, or `SharedCalling`. Separate multiple capabilities with semicolons (`;`). |
| `NetworkSiteId` | No | The network site ID to associate with the number. Retrieve network sites with [Get-CsTenantNetworkSite](./Get-CsTenantNetworkSite.md). |
| `ReverseNumberLookup` | No | Set to `SkipInternalVoip` to route internal calls to the number through external PSTN connectivity instead of internal VoIP reverse number lookup. |

Omit optional columns that you don't need, or leave their cells empty for individual numbers. An empty optional cell supplies no value for that attribute. Keep the comma separators for empty cells so that the remaining values stay in the correct columns. Separate columns with commas, not semicolons; semicolons separate multiple values within a cell.

The following example includes all six supported columns.

Before running the example, replace the sample telephone numbers, location ID, network site ID, and tags with values for your organization. Use an existing location ID and network site ID from your tenant, and select the capabilities and reverse number lookup behavior appropriate for each number. Set `$csvPath` to a file in an existing folder on your computer. The example creates or overwrites that file using UTF-8 encoding, preserving the telephone numbers as text.

After connecting to Microsoft Teams, create the CSV file from a PowerShell here-string, upload its contents, and check the order status:

```powershell
$csvPath = "C:\Temp\DrNumberWithAttributes.csv"
$csvContent = @'
TelephoneNumber,LocationId,Tags,AcquiredCapabilities,NetworkSiteId,ReverseNumberLookup
+12065550100,11111111-2222-3333-4444-555555555555,Seattle;Reception,UserAssignment;ConferenceAssignment,Seattle,SkipInternalVoip
+12065550101,,Support,VoiceApplicationAssignment,,
+12065550102,,,,,
'@

Set-Content -LiteralPath $csvPath -Value $csvContent -Encoding UTF8 -ErrorAction Stop
$drlist = [System.IO.File]::ReadAllBytes($csvPath)
$orderId = New-CsOnlineDirectRoutingTelephoneNumberUploadOrder -FileContent $drlist
Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId $orderId
```

The first data row supplies all five additional attributes, including two tags and two capabilities. The second data row supplies only a tag and a capability. The third data row uploads a number without additional attributes.

For a CSV upload, specify the attributes in the file. Don't combine `-FileContent` with `-TelephoneNumber`, `-StartingNumber`, `-EndingNumber`, or the individual attribute parameters.

## PARAMETERS

### -AcquiredCapability
This is the list of Acquired Capabilities the number(s) have. Supported capabilities are ConferenceAssignment, VoiceApplicationAssignment, UserAssignment, and SharedCalling.

```yaml
Type: String
Parameter Sets: InputByList, InputByRange
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -EndingNumber
This is the ending number of a range of Direct Routing telephone number you wish to upload to Microsoft Teams telephone number management inventory.

```yaml
Type: String
Parameter Sets: InputByRange
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileContent
This is the content of a .csv file that includes the Direct Routing telephone numbers and associated attributes to be uploaded to the Microsoft Teams telephone number management inventory. This parameter can be used to upload up to 10,000 numbers at a time.

Pass a byte array, such as the output of `[System.IO.File]::ReadAllBytes()`, not a file path or the objects returned by `Import-Csv`. The file must contain the case-sensitive `TelephoneNumber` header. Optional columns are `LocationId`, `Tags`, `AcquiredCapabilities`, `NetworkSiteId`, and `ReverseNumberLookup`. Attribute values apply to the number on the same row. See Examples 4 and 5 for CSV preparation and upload instructions.

```yaml
Type: Byte[]
Parameter Sets: InputByFile
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationId
The LocationId of the location to assign to the specific user. You can get it using Get-CsOnlineLisLocation. You can set the location on both assigned and unassigned phone numbers.

```yaml
Type: String
Parameter Sets: InputByList, InputByRange
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkSiteId
ID of a network site. A network site represents a location where your organization has a physical venue, such as offices, a set of buildings, or a campus.

```yaml
Type: String
Parameter Sets: InputByList, InputByRange
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReverseNumberLookup
This parameter is used to control the behavior of reverse number lookup (RNL) for a phone number. When RNL is set to 'SkipInternalVoip', an internal call to this phone number will not attempt to pass through internal VoIP via reverse number lookup in Microsoft Teams. Instead the call will be established through external PSTN connectivity directly.

```yaml
Type: String
Parameter Sets: InputByList, InputByRange
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartingNumber
This is the starting number of a range of Direct Routing telephone number you wish to upload to Microsoft Teams telephone number management inventory.

```yaml
Type: String
Parameter Sets: InputByRange
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tag
Indicates the tag to be assigned or created for telephone number(s).

```yaml
Type: String
Parameter Sets: InputByList, InputByRange
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumber
This is the Direct Routing telephone numbers you wish to upload to Microsoft Teams telephone number management inventory. It is comma delimited list of one or more Direct Routing telephone numbers.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.String

## NOTES
The cmdlet is available in Teams PowerShell module 6.7.1 or later. Telephone number attributes LocationId, AcquiredCapability, NetworkSiteId, ReverseNumberLookup, and Tag are supported from Teams PowerShell module version 7.9.0 or later

## RELATED LINKS
[Get-CsOnlineTelephoneNumberOrder](./get-csonlinetelephonenumberorder.md)
[New-CsOnlineTelephoneNumberReleaseOrder](./new-csonlinetelephonenumberreleaseorder.md)
