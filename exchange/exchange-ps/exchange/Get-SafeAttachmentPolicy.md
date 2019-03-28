---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Get-SafeAttachmentPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Get-SafeAttachmentPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-SafeAttachmentPolicy cmdlet to view Safe Attachments policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SafeAttachmentPolicy [[-Identity] <SafeAttachmentPolicyIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
Safe Attachments is a feature in Advanced Threat Protection that opens email attachments in a special hypervisor environment to detect malicious activity.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-SafeAttachmentPolicy
```

This example shows a summary list of all Safe Attachments policies.

### -------------------------- Example 2 --------------------------
```
Get-SafeAttachmentPolicy -Identity Default | Format-List
```

This example shows detailed information about the Safe Attachments policy named Default.

## PARAMETERS

### -Identity
The Identity parameter specifies the Safe Attachments policy that you want to view.

You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: SafeAttachmentPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/00b066b5-2066-4525-b368-d8b1815990b4.aspx)
