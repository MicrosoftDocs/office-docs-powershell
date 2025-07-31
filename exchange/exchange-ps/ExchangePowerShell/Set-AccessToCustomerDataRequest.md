---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-accesstocustomerdatarequest
schema: 2.0.0
title: Set-AccessToCustomerDataRequest
---

# Set-AccessToCustomerDataRequest

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-AccessToCustomerDataRequest cmdlet to approve, deny, or cancel Microsoft 365 customer lockbox requests that control access to your data by Microsoft support engineers.

**Note**: Customer Lockbox is included in Microsoft 365 E5, or you can buy a separate Customer Lockbox subscription with any Microsoft 365 Enterprise plan.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-AccessToCustomerDataRequest -ApprovalDecision <AccessToCustomerDataApproverDecision> -RequestId <String>
 [-Comment <String>]
 [-ServiceName <AccessToCustomerDataRequestServiceName>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AccessToCustomerDataRequest -ApprovalDecision Approve -RequestId EXSR123456 -Comment "Troubleshoot issues in Rick Hofer mailbox"
```

This example approves the customer lockbox request EXSR123456 with a comment.

## PARAMETERS

### -ApprovalDecision

> Applicable: Exchange Online, Exchange Online Protection

The ApprovalDecision parameter specifies the approval decision for the customer lockbox request. Valid values are:

- Approve
- Deny
- Cancel

```yaml
Type: AccessToCustomerDataApproverDecision
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestId

> Applicable: Exchange Online, Exchange Online Protection

The RequestId parameter specifies the reference number of the customer lockbox request that you want to approve, deny, or cancel (for example, EXSR123456).

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

### -Comment

> Applicable: Exchange Online, Exchange Online Protection

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

### -ServiceName

> Applicable: Exchange Online, Exchange Online Protection

The ServiceName parameter specifies the related service. Valid values are:

- EOP
- Exchange
- SharePoint
- Teams

```yaml
Type: Microsoft.Exchange.Management.AccessToCustomerDataApproval.AccessToCustomerDataRequestServiceName
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
