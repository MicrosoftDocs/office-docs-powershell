---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-arcconfig
applicable: Exchange Online, Exchange Online Protection
title: Set-ArcConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-ArcConfig

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-ArcConfig cmdlet to modify the list of trusted Authenticated Received Chain (ARC) sealers that are configured in the cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-ArcConfig [-Identity] <HostedConnectionFilterPolicyIdParameter> -ArcTrustedSealers <String[]>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Services that modify message content in transit before delivery can invalidate DKIM email signatures and affect the authentication of the message. These services can use ARC to provide details of the original authentication before the modifications occurred. Your organization can then trust these details to help authenticate the message.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ArcConfig -Identity Default -ArcTrustedSealers fabrikam.com
```

This example configures "fabrikam.com" as the only trusted ARC sealer in the organization.

### Example 2
```powershell
$DomainsAdd = @(Get-ArcConfig | select -Expand ArcTrustedSealers)

$DomainsAdd += "cohovineyard.com","tailspintoys.com"

Set-ArcConfig -Identity Default -ArcTrustedSealers $DomainsAdd
```

This example adds the trusted ARC sealers "cohovineyard.com" and "tailspintoys.com" without affecting the other trusted ARC sealer entries.

### Example 3
```powershell
$x = @(Get-ArcConfig | select -Expand ArcTrustedSealers)

$y = $x.Split(",")

$DomainsRemove = [System.Collections.ArrayList]($y)

$DomainsRemove

$DomainsRemove.RemoveAt(6)

Set-ArcConfig -Identity Default -ArcTrustedSealers $DomainsRemove
```

This example modifies the trusted ARC sealers list by removing an existing ARC sealer without affecting other ARC sealers that are already specified.

The first four commands return the existing list of ARC sealers. The first ARC sealer in the list has the index number 0, the second has the index number 1, and so on. Use the index number to specify the ARC sealer that you want to remove.

The last two commands remove the seventh ARC sealer that's displayed in the list.

### Example 4
```powershell
$arcSealer = 'fabrikam.com'
$x = @(Get-ArcConfig | Select-Object -Expand ArcTrustedSealers)

$y = @($x.Split(","))
$DomainsRemove = [System.Collections.ArrayList]($y)
$DomainsRemove.Remove($arcSealer)

if ($DomainsToRemove.Count -eq 0) {        
   Set-ArcConfig -Identity Default -ArcTrustedSealers " "
   }
else {
   Set-ArcConfig -Identity Default -ArcTrustedSealers $DomainsRemove
   }
```

This example removes the specified ARC sealer from the list (`$arcSealer`).

If no other ARC sealers exist after removing this entry from the list, using the value `" "` for the ArcTrustedSealers parameter avoids a bind argument error if `$DomainsToRemove` value is empty.

## PARAMETERS

### -Identity
The Identity parameter specifies the trusted ARC sealers list that you want to modify. Use one of the following values:

- Default for your own organization.
- \<TenantID\>\Default for delegated organizations. The \<TenantID\> value is a GUID that's visible in many admin portal URLs in Microsoft 365 (the tid= value). For example, a32d39e2-3702-4ff5-9628-31358774c091.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ArcTrustedSealers
The ArcTrustedSealers parameter specifies the domain name of the ARC sealers that you want to add.

The domain name must match the domain that's shown in the `d` tag in the **ARC-Seal** and **ARC-Message-Signature** headers in affected email messages (for example, fabrikam.com). You can use Outlook to see these headers.

To replace the existing list of ARC sealers with the values you specify, use the syntax `Domain1,Domain2,...DomainN`. To preserve existing values, be sure to include the entries that you want to keep along with the new values that you want to add.

To add or remove values without affecting the other entries, see the Examples section in this article.

To empty the list, use the value `" "` (a space enclosed in double quotation marks).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online, Exchange Online Protection

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
