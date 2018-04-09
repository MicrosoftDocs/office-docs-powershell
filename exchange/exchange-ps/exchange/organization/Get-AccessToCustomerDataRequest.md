---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Get-AccessToCustomerDataRequest
schema: 2.0.0
---

# Get-AccessToCustomerDataRequest

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AccessToCustomerDataRequest cmdlet to view Office 365 customer lockbox requests that control access to your data by Microsoft support engineers.

Note: Customer lockbox is included in the Office 365 E5 plan. If you don't have an Office 365 E5 plan, you can buy a separate customer lockbox subscription with any Office 365 Enterprise plan.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-AccessToCustomerDataRequest [-ApprovalStatus <String>] [-CreatedAfter <ExDateTime>] [-RequestId <String>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-AccessToCustomerDataRequest
```

This example returns a summary list of all customer lockbox request.

### -------------------------- Example 2 --------------------------
```
Get-AccessToCustomerDataRequest -ApprovalStatus Pending
```

This example returns a summary list of all customer lockbox requests that have the status value Pending.

### -------------------------- Example 3 --------------------------
```
Get-AccessToCustomerDataRequest -RequestId EXSR123456 | Format-List
```

This example returns detailed information the customer lockbox request EXSR123456.

## PARAMETERS

### -ApprovalStatus
The ApprovalStatus parameter filters the results by approval status. Valid values are:

- Approved

- Canceled

- Denied

- Pending

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreatedAfter
The CreatedAfter parameter filters the results by the creation date in Coordinated Universal Time (UTC).

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2016-05-06 14:30:00z".

- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, (Get-Date "5/6/2016 9:30 AM").ToUniversalTime(). For more information, see Get-Date (https://go.microsoft.com/fwlink/p/?LinkID=113313).

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestId
The RequestId parameter filters the results by reference number (for example, EXSR123456).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/2ad3b776-f81b-4fdc-895b-a1ac98832286.aspx)
