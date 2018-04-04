---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Set-AccessToCustomerDataRequest
schema: 2.0.0
---

# Set-AccessToCustomerDataRequest

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-AccessToCustomerDataRequest cmdlet to approve, deny, or cancel Office 365 customer lockbox requests that control access to your data by Microsoft support engineers.

Note: Customer lockbox is included in the Office 365 E5 plan. If you don't have an Office 365 E5 plan, you can buy a separate customer lockbox subscription with any Office 365 Enterprise plan.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-AccessToCustomerDataRequest -ApprovalDecision <Approve | Deny | Cancel> -RequestId <String>
 [-Comment <String>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-AccessToCustomerDataRequest -ApprovalDecision Approve -RequestId EXSR123456 -Comment "Troubleshoot issues in Rick Hofer mailbox"
```

This example approves the customer lockbox request EXSR123456 with a comment.

## PARAMETERS

### -ApprovalDecision
The ApprovalDecision parameter specifies the approval decision for the customer lockbox request. Valid values are:

- Approve

- Deny

- Cancel

```yaml
Type: Approve | Deny | Cancel
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestId
The RequestId parameter specifies the reference number of the customer lockbox request that you want to approve, deny, or cancel (for example, EXSR123456).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".

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

[Online Version](https://technet.microsoft.com/library/b3d866b1-628f-4d66-8114-1798934a2fcf.aspx)

