---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-sharingpolicy
schema: 2.0.0
title: Set-SharingPolicy
---

# Set-SharingPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-SharingPolicy cmdlet to modify existing sharing policies that control how users inside your organization can share free/busy and contact information with users outside your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-SharingPolicy [-Identity] <SharingPolicyIdParameter>
 [-Confirm]
 [-Default]
 [-DomainController <Fqdn>]
 [-Domains <MultiValuedProperty>]
 [-Enabled <Boolean>]
 [-Name <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Users can only share free/busy and contact information after federation is configured between Exchange organizations. After that, users can send sharing invitations to the external recipients as long as those invitations comply with the sharing policy. A sharing policy needs to be assigned to a mailbox to be effective. If a mailbox doesn't have a specific sharing policy assigned, a default policy enforces the sharing options for the mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-SharingPolicy -Identity Contoso -Domains "mail.contoso.com: CalendarSharingFreeBusySimple"
```

This example modifies the sharing policy Contoso for contoso.com, which is a domain outside your organization. This policy allows users in the Contoso domain to see simple free/busy information.

### Example 2
```powershell
Set-SharingPolicy -Identity SharingPolicy01 -Domains "contoso.com: CalendarSharingFreeBusySimple", "atlanta.contoso.com: CalendarSharingFreeBusyReviewer", "beijing.contoso.com: CalendarSharingFreeBusyReviewer"
```

This example adds a second domain to the sharing policy SharingPolicy01. When you're adding a domain to an existing policy, you must include any previously included domains.

### Example 3
```powershell
Set-SharingPolicy -Identity "SharingPolicy01" -Enabled $false
```

This example disables the sharing policy SharingPolicy01.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Identity parameter specifies the identity of the sharing policy that you want to modify. You can use one of the following values:

- ADObjectID
- Distinguished name (DN)
- Legacy DN
- GUID

```yaml
Type: SharingPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Default

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Default switch specifies that the sharing policy is the default sharing policy for all mailboxes. You don't need to specify a value with this switch.

If no sharing policy is applied to a mailbox, the default policy is automatically applied. If you want to disable sharing across your organization, you disable the default policy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domains

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Domains parameter specifies the domains and the associated sharing options for those domains in the sharing policy. Values for this parameter use the basic syntax: `'Domain: SharingPolicyAction'`.

You can use the following values for `Domain`:

- A domain: For example, `mail.contoso.com`. A domain doesn't include subdomains. You must configure each subdomain separately.
- \*: Share with external federated organizations. For example, another Microsoft 365 organization or an on-premises Exchange organization.
- Anonymous: Share with external, non-federated organizations and individuals with internet access.

You can use the following values for `SharingPolicyAction`:

- CalendarSharingFreeBusySimple: Share free/busy hours only
- CalendarSharingFreeBusyDetail: Share free/busy hours, subject and location
- CalendarSharingFreeBusyReviewer: Share free/busy hours, subject, location and the body of the message or calendar item
- ContactsSharing: Share contacts only

You can specify multiple `'Domain: SharingPolicyAction'` values separated by commas, and you can specify multiple `SharingPolicyAction` values for the same domain separated by commas. For example, `'mail.contoso.com: CalendarSharingFreeBusySimple', 'mail.fabrikam.com: CalendarSharingFreeBusyDetail, ContactsSharing'`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Enabled parameter specifies whether to enable the sharing policy. Valid values for this parameter are $true or $false. The default is $true.

When the sharing policy is disabled, users who are provisioned to use this policy continue to share information until the sharing policy assistant runs.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Name parameter specifies the unique name of the sharing policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
