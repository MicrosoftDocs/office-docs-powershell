---
applicable: Security & Compliance
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-informationbarrierrecipientstatus
schema: 2.0.0
title: Get-InformationBarrierRecipientStatus
---

# Get-InformationBarrierRecipientStatus

## SYNOPSIS
This cmdlet is available only in Security & Compliance PowerShell. For more information, see [Security & Compliance PowerShell](https://learn.microsoft.com/powershell/exchange/scc-powershell).

Use the Get-InformationBarrierRecipientStatus cmdlet to return information about recipients and their relationship to information barrier policies.

**Note**: This cmdlet doesn't work with information barriers in non-legacy mode. To determine your current mode, see [Check the IB mode for your organization](https://learn.microsoft.com/purview/information-barriers-multi-segment#check-the-ib-mode-for-your-organization). If you're in non-legacy mode, run the following command to get information about a single recipient: `Get-Recipient -Identity <IdentityValue> | Format-List Name,*segment*`. Similarly, to get the relationship information between two recipients, use the **Get-ExoInformationBarrierRelationship** cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-InformationBarrierRecipientStatus [-Identity] <RecipientIdParameter> [[-Identity2] <RecipientIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
The following information is returned in the output of this cmdlet:

- A warning message that indicates whether or not the recipient is included in an information barrier policy.
- If present, the GUID part in the ExOPolicyId property value identifies the information barrier policy that the recipient is included in. You can run the command `Get-InformationBarrierPolicy -ExOPolicyId <GUID>` to identify and view the details of the policy.
- Basic information about the recipient (display name, alias, and last name).
- Recipient properties that can be used in organization segments (Department, CustomAttributeN, etc.) and the current property values for the recipient.

To use this cmdlet in Security & Compliance PowerShell, you need to be assigned permissions. For more information, see [Permissions in the Microsoft Purview compliance portal](https://learn.microsoft.com/purview/microsoft-365-compliance-center-permissions).

## EXAMPLES

### Example 1
```powershell
Get-InformationBarrierRecipientStatus -Identity meganb
```

This example returns the information barrier policy information for the user meganb.

### Example 2
```powershell
Get-InformationBarrierRecipientStatus -Identity meganb -Identity2 alexw
```

This example returns the information barrier policy relationship for the users meganb and alexw.

## PARAMETERS

### -Identity

> Applicable: Security & Compliance

The Identity parameter specifies the recipient that you want to view the segment and policy assignment information for. You can use any value that uniquely identifies the recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Identity2

> Applicable: Security & Compliance

The Identity2 parameter specifies an optional second recipient when you want to view the information barrier policy relationship to the first recipient specified by the Identity parameter. You can use any value that uniquely identifies the second recipient. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

When you include this parameter in a command, you get output for each recipient.

You can only use this parameter with the Identity parameter; you can't use it by itself.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Attributes for information barrier policies](https://learn.microsoft.com/purview/information-barriers-attributes)

[Define policies for information barriers](https://learn.microsoft.com/purview/information-barriers-policies)

[New-InformationBarrierPolicy](https://learn.microsoft.com/powershell/module/exchangepowershell/new-informationbarrierpolicy)
