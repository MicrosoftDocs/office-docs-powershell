---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Update-Recipient
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Update-Recipient

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Update-Recipient cmdlet to add Microsoft Exchange attributes to recipient objects created by the global address list (GAL) synchronization management agent in Microsoft Forefront Identity Manager (FIM) 2010. The recipient objects you modify using this cmdlet must reside on a server running Microsoft Exchange Server 2010 or later.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Update-Recipient [-Identity] <RecipientIdParameter> [-Confirm] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Because of mergers, acquisitions, or legal requirements, customers may need to deploy Exchange in a multiple Exchange forest topology. These deployments require the synchronization of recipient objects across disparate Active Directory forests.

Microsoft provides the GAL synchronization management agent for synchronizing recipient objects. The version of the GAL synchronization management agent included in Microsoft Identity Integration Server (MIIS) 2003 was designed to work with Exchange Server 2003 and relied on the Recipient Update Service. Because the Recipient Update Service is a deprecated feature and is no longer required, the new GAL synchronization management agent included in FIM 2010 is designed to function without the Recipient Update Service.

As part of the synchronization process, the FIM 2010 GAL synchronization management agent creates recipient objects in both Active Directory forests. After the recipients are created, the management agent uses the Update-Recipient cmdlet to add the attributes required by Microsoft Exchange to complete the provisioning of these recipients.

In Exchange, before you can run the Update-Recipient cmdlet to convert an Active Directory user object into an Exchange mailbox, you must stamp the user object with the following three mandatory Exchange attributes:

- homeMDB

- mailNickname

- msExchHomeServerName

If you're using MIIS 2003, you must run various cmdlets to complete the provisioning process of the mail contacts created by the GAL synchronization management agent. The Update-Recipient cmdlet provides an alternate and more efficient method to do this. You can run the Update-Recipient cmdlet against the recipient objects created by the MIIS 2003 GAL synchronization management agent to complete the provisioning process.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Update-Recipient -Identity "John Smith"
```

This example adds Exchange attributes to the mail contact that represents John Smith's mailbox.

### -------------------------- Example 2 --------------------------
```
Get-MailContact -OrganizationalUnit "contoso.com/fabrikam.com Users" | Update-Recipient
```

This example updates all contacts in a specific organizational unit (OU). This example assumes that recipients are synchronized between two forests, contoso.com and fabrikam.com, and all the synchronized recipients from the fabrikam.com domain are stored in a specific OU called fabrikam.com Users in the contoso.com domain.

## PARAMETERS

### -Identity
The Identity parameter specifies the recipient that you want to update. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/969b33b6-5165-4f9c-bcca-08923df4add6.aspx)
