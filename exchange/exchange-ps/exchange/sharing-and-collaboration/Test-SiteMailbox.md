---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Test-SiteMailbox
schema: 2.0.0
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Test-SiteMailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Test-SiteMailbox cmdlet to test the site mailbox to Microsoft SharePoint connectivity and to test whether users have the correct permissions to use a site mailbox. This cmdlet should be used for troubleshooting and diagnostic purposes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Test-SiteMailbox [[-Identity] <RecipientIdParameter>] [-BypassOwnerCheck] [-Confirm]
 [-RequestorIdentity <RecipientIdParameter>] [-SharePointUrl <Uri>] [-UseAppTokenOnly] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
If you don't specify the RequestorIdentity parameter, the command uses the identification of the user running this command.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-SiteMailbox -BypassOwnerCheck -SharePointUrl "https://myserver/teams/edu"
```

The example tests a SharePoint site's connectivity only. You can use this command before creating a site mailbox or if you're having a problem creating a site mailbox.

### -------------------------- Example 2 --------------------------
```
Test-SiteMailbox -BypassOwnerCheck -Identity mysitemailbox@contoso.com -UseAppTokenOnly
```

This example tests the Exchange server connectivity with an existing site mailbox using the Identity and UseAppTokenOnly parameters. The Identity parameter specifies the site mailbox and the UseAppTokenOnly parameter specifies that you want to test under the identity of the Exchange server. Run this command for troubleshooting documentation synchronization issues.

### -------------------------- Example 3 --------------------------
```
Test-SiteMailbox -BypassOwnerCheck -RequestorIdentity "kweku@contoso.com" -SharePointUrl "https://myserver/teams/edu"
```

This example tests a specific user's ability to access a SharePoint site by using the RequestorIdentity parameter.

## PARAMETERS

### -BypassOwnerCheck
The BypassOwnerCheck parameter is used when the account that's running the command isn't a member or owner of the site mailbox. You don't need to specify a value with this switch.

If you run the command without this parameter and you aren't a member or owner of the site mailbox, then the command will fail.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identity of the site mailbox. You can use any of the following values:

- Distinguished name (DN)

- GUID

- Name

- Display name

- Alias

- Primary SMTP address

You can't use this parameter with the SharePointUrl parameter.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RequestorIdentity
The RequestorIdentity parameter specifies the identity of a user for whom you want to test to make sure that they have the correct permissions to connect to the SharePoint site mailbox. If you don't specify this parameter, the command uses the identification of the user running this command. You can use any of the following values:

- DN

- GUID

- Name

- Display name

- Alias

- Primary SMTP address

You can't use this parameter with the UseAppTokenOnly parameter.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharePointUrl
This parameter is available only in on-premises Exchange.

The SharePointUrl parameter specifies the SharePoint URL where the site mailbox is hosted, for example, "https://myserver/teams/edu".

You can't use this parameter with the Identity parameter.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseAppTokenOnly
The UseAppTokenOnlyswitch specifies that you want to test the site mailbox by using the identity of the Exchange server. You don't need to specify a value with this switch.

You can't use this parameter with the RequestorIdentity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/a0b6ebfd-f424-44a3-a971-1790f8e5d643.aspx)
