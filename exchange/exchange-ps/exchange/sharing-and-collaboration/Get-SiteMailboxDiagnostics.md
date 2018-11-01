---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-SiteMailboxDiagnostics
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-SiteMailboxDiagnostics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-SiteMailboxDiagnostics cmdlet to view important event-related data for each site mailbox. This information can be used to troubleshoot site mailbox issues.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-SiteMailboxDiagnostics [-Identity] <RecipientIdParameter> [-BypassOwnerCheck] [-Confirm] [-SendMeEmail]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
If you aren't a member or owner of the site mailbox that you want to view the diagnostics information for, you must use the BypassOwnerCheck parameter when running this cmdlet. If you aren't a member or owner of the site mailbox and you run this cmdlet without using the BypassOwnerCheck parameter, the command fails with an "object not found" error.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-SiteMailboxDiagnostics -BypassOwnerCheck -Identity "Marketing Events 2015"
```

This example returns the event information for the site mailbox by using its display name Marketing Events 2015.

### -------------------------- Example 2 --------------------------
```
Get-SiteMailboxDiagnostics -BypassOwnerCheck -Identity events2015@contoso.com -SendMeEmail
```

This example returns the event information for the Marketing Events 2015 site mailbox and sends an email to the primary SMTP address of the user running this command.

## PARAMETERS

### -Identity
The Identity parameter specifies the site mailbox. You can use the following values:

- Alias

- Display name

- Domain\\Account

- SMTP address

- Distinguished name (DN)

- Object GUID

- User principal name (UPN)

- LegacyExchangeDN

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BypassOwnerCheck
The BypassOwnerCheck parameter is used when the account that's running the command isn't a member or owner of the site mailbox. You don't need to specify a value with this switch.

If you run the command without this parameter and you aren't a member or owner of the site mailbox, then the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendMeEmail
The SendMeEmailswitch specifies that the diagnostic information is sent to the primary SMTP email address of the user account that's running the command. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/4d6c7fb2-8b5c-44c8-add2-f862240b9da0.aspx)
