---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-SharingPolicy

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-SharingPolicy cmdlet to modify an existing sharing policy to regulate how users inside your organization can share free/busy and contact information with users outside the organization. Users can only share this information after federation has been configured in Microsoft Exchange. After federation is configured, users can send sharing invitations that comply with a sharing policy to external recipients in other Exchange Server 2010 organizations that have federation enabled. A sharing policy needs to be assigned to a mailbox to be effective. If a mailbox doesn't have a specific sharing policy assigned, a default policy enforces the level of sharing permitted for this mailbox.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-SharingPolicy cmdlet to modify an existing sharing policy to regulate how users inside your organization can share free/busy and contact information with users outside the organization. Users can only share this information after federation has been configured in Exchange. After federation is configured, users can send sharing invitations that comply with a sharing policy to external recipients in other Microsoft Exchange Server 2010 and Exchange Server 2013 organizations that have federation enabled. A sharing policy needs to be assigned to a mailbox to be effective. If a mailbox doesn't have a specific sharing policy assigned, a default policy enforces the level of sharing permitted for this mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-SharingPolicy cmdlet to modify existing sharing policies that control how users inside your organization can share free/busy and contact information with users outside your organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-SharingPolicy [-Identity] <SharingPolicyIdParameter> [-Confirm] [-Default] [-DomainController <Fqdn>]
 [-Domains <MultiValuedProperty>] [-Enabled <$true | $false>] [-Name <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Sharing policies" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Sharing policies" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

Users can only share free/busy and contact information after federation has been configured between Exchange organizations. After that, users can send sharing invitations to the external recipients as long as those invitations comply with the sharing policy. A sharing policy needs to be assigned to a mailbox to be effective. If a mailbox doesn't have a specific sharing policy assigned, a default policy enforces the lsharing options for the mailbox.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-SharingPolicy -Identity Contoso -Domains 'mail.contoso.com: CalendarSharingFreeBusySimple'
```

This example modifies the sharing policy Contoso for contoso.com, which is a domain outside your organization. This policy allows users in the Contoso domain to see simple free/busy information.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-SharingPolicy -Identity Contoso -Domains 'mail.contoso.com: CalendarSharingFreeBusySimple'
```

This example modifies the sharing policy Contoso for contoso.com, which is a domain outside your organization. This policy allows users in the Contoso domain to see simple free/busy information.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-SharingPolicy -Identity Contoso -Domains "mail.contoso.com: CalendarSharingFreeBusySimple"
```

This example modifies the sharing policy Contoso for contoso.com, which is a domain outside your organization. This policy allows users in the Contoso domain to see simple free/busy information.

### Example 1 -------------------------- (Exchange Online)
```
Set-SharingPolicy -Identity Contoso -Domains "mail.contoso.com: CalendarSharingFreeBusySimple"
```

This example modifies the sharing policy Contoso for contoso.com, which is a domain outside your organization. This policy allows users in the Contoso domain to see simple free/busy information.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-SharingPolicy -Identity SharingPolicy01 -Domains 'contoso.com: CalendarSharingFreeBusySimple', 'atlanta.contoso.com: CalendarSharingFreeBusyReviewer', 'beijing.contoso.com: CalendarSharingFreeBusyReviewer'
```

This example adds a second domain to the sharing policy SharingPolicy01. When you're adding a domain to an existing policy, you must include any previously included domains.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-SharingPolicy -Identity SharingPolicy01 -Domains 'contoso.com: CalendarSharingFreeBusySimple', 'atlanta.contoso.com: CalendarSharingFreeBusyReviewer', 'beijing.contoso.com: CalendarSharingFreeBusyReviewer'
```

This example adds a second domain to the sharing policy SharingPolicy01. When you're adding a domain to an existing policy, you must include any previously included domains.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-SharingPolicy -Identity SharingPolicy01 -Domains "contoso.com: CalendarSharingFreeBusySimple", "atlanta.contoso.com: CalendarSharingFreeBusyReviewer", "beijing.contoso.com: CalendarSharingFreeBusyReviewer"
```

This example adds a second domain to the sharing policy SharingPolicy01. When you're adding a domain to an existing policy, you must include any previously included domains.

### Example 2 -------------------------- (Exchange Online)
```
Set-SharingPolicy -Identity SharingPolicy01 -Domains "contoso.com: CalendarSharingFreeBusySimple", "atlanta.contoso.com: CalendarSharingFreeBusyReviewer", "beijing.contoso.com: CalendarSharingFreeBusyReviewer"
```

This example adds a second domain to the sharing policy SharingPolicy01. When you're adding a domain to an existing policy, you must include any previously included domains.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-SharingPolicy -Identity "SharingPolicy01" -Enabled $false
```

This example disables the sharing policy SharingPolicy01.

### Example 3 -------------------------- (Exchange Server 2013)
```
Set-SharingPolicy -Identity "SharingPolicy01" -Enabled $false
```

This example disables the sharing policy SharingPolicy01.

### Example 3 -------------------------- (Exchange Server 2016)
```
Set-SharingPolicy -Identity "SharingPolicy01" -Enabled $false
```

This example disables the sharing policy SharingPolicy01.

### Example 3 -------------------------- (Exchange Online)
```
Set-SharingPolicy -Identity "SharingPolicy01" -Enabled $false
```

This example disables the sharing policy SharingPolicy01.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the sharing policy that you want to modify. You can use one of the following values:

- ADObjectID

- Distinguished name (DN)

- Legacy DN

- GUID

```yaml
Type: SharingPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Default
!!! Exchange Server 2010

The Default parameter specifies that this sharing policy is the default sharing policy for all mailboxes. If no sharing policy has been applied to a mailbox, the default policy is automatically applied. If you want to disable sharing across your organization, you can set the default policy to be disabled.

You don't have to specify a value with this parameter.



!!! Exchange Server 2013

The Default switch specifies that this sharing policy is the default sharing policy for all mailboxes. If no sharing policy has been applied to a mailbox, the default policy is automatically applied. If you want to disable sharing across your organization, you can set the default policy to be disabled.

You don't have to specify a value with this parameter.



!!! Exchange Server 2016, Exchange Online

The Default switch specifies that the sharing policy is the default sharing policy for all mailboxes. You don't need to specify a value with this switch.

If no sharing policy has been applied to a mailbox, the default policy is automatically applied. If you want to disable sharing across your organization, you disable the default policy.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domains
!!! Exchange Server 2010, Exchange Server 2013

The Domains parameter specifies domains to which this policy applies and the sharing policy action. Values for this parameter use the format Domain: SharingPolicyAction.

The following sharing policy action values can be used:

- CalendarSharingFreeBusySimple Share free/busy hours only

- CalendarSharingFreeBusyDetail Share free/busy hours, subject, and location

- CalendarSharingFreeBusyReviewer Share free/busy hours, subject, location, and the body of the message or calendar item

- ContactsSharing Share contacts only

The following is an example: 'Contoso.com: CalendarSharingFreeBusySimple', 'Fabrikam.com: CalendarSharingFreeBusyDetail, ContactsSharing'

Adding a domain doesn't include subdomains. You must configure each subdomain separately.



!!! Exchange Server 2016, Exchange Online

The Domains parameter specifies domains to which this policy applies and the sharing policy action. Values for this parameter use the format \<Domain\>: \<SharingPolicyAction\>.

The following sharing policy action values can be used:

- CalendarSharingFreeBusySimple: Share free/busy hours only.

- CalendarSharingFreeBusyDetail: Share free/busy hours, subject, and location.

- CalendarSharingFreeBusyReviewer: Share free/busy hours, subject, location, and the body of the message or calendar item.

- ContactsSharing: Share contacts only.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

A domain doesn't include subdomains. You need to configure each subdomain separately.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether to enable the sharing policy. Valid values for this parameter are $true or $false. The default is $true.

When the sharing policy is disabled, users who are provisioned to use this policy continue to share information until the sharing policy assistant runs.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010

The Name parameter allows you to change the name of the sharing policy.



!!! Exchange Server 2013

The Name parameter specifies the name of the sharing policy.



!!! Exchange Server 2016, Exchange Online

The Name parameter specifies the unique name of the sharing policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/42bab80c-62af-4b37-bb41-fa0173b27d86.aspx)

