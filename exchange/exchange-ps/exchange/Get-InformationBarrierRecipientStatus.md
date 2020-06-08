---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-informationbarrierrecipientstatus
applicable: Office 365 Security & Compliance Center
title: Get-InformationBarrierRecipientStatus
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "o365scc-ps"
---

# Get-InformationBarrierRecipientStatus

## SYNOPSIS
This cmdlet is available only in Office 365 Security & Compliance Center PowerShell. For more information, see [Office 365 Security & Compliance Center PowerShell](https://docs.microsoft.com/powershell/exchange/office-365-scc/office-365-scc-powershell).

Use the Get-InformationBarrierRecipientStatus cmdlet to return information about recipients and their relationship to information barrier policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-InformationBarrierRecipientStatus [-Identity] <RecipientIdParameter> [[-Identity2] <RecipientIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The following information is returned in the output of this cmdlet:

- A warning message that indicates whether or not the recipient is included in an information barrier policy.

- If present, the GUID part in the ExOPolicyId property value identifies the information barrier policy that the recipient is included in. You can run the command `Get-InformationBarrierPolicy -ExOPolicyId <GUID>` to identify and view the details of the policy.

- Basic information about the recipient (display name, alias, and last name).

- Recipient properties that can be used in organization segments (Department, CustomAttributeN, etc.) and the current property values for the recipient.

You need to be assigned permissions in the Office 365 Security & Compliance Center before you can use this cmdlet. For more information, see [Permissions in Office 365 Security & Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=511920).

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
The Identity parameter specifies the recipient that you want to view the segment and policy assignment information for. You can use any value that uniquely identifies the recipient. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Office 365 Security & Compliance Center

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Identity2
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
Applicable: Office 365 Security & Compliance Center

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Attributes for information barrier policies](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-attributes)

[Define policies for information barriers](https://docs.microsoft.com/microsoft-365/compliance/information-barriers-policies)

[New-InformationBarrierPolicy](https://docs.microsoft.com/powershell/module/exchange/new-informationbarrierpolicy)
