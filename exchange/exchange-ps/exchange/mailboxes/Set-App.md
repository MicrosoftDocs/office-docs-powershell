---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-App
schema: 2.0.0
---

# Set-App

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-App cmdlet to modify the availability of organization apps.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-App [-Identity] <AppIdParameter> [-Confirm] [-DefaultStateForUser <Enabled | Disabled | AlwaysEnabled>]
 [-DomainController <Fqdn>] [-Enabled <$true | $false>] [-OrganizationApp]
 [-ProvidedTo <Everyone | SpecificUsers>] [-UserList <MultiValuedProperty>] [-WhatIf] [-PrivateCatalog]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-App cmdlet can only be used when configuring the availability of an organization app. This task requires that the specified app has already been installed (for example, that the app has been installed with the New-App cmdlet, or that it's a default app for Outlook).

Default apps in Outlook on the web and apps that you've installed for use by users in your organization are known as organization apps. Organization apps can't be removed by end users, but can be enabled or disabled. If an app is an organization app (scope default or organization), the delete control on the toolbar is disabled for end users. Administrators are able to remove organization apps. Administrators can't remove default apps, but they can disable them for the entire organization.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$a= Get-DistributionGroupMember -Identity "Finance Team"; Set-App -OrganizationApp -Identity 3f10017a-9bbe-4a23-834b-6a8fe3af0e37 -ProvidedTo SpecificUsers -UserList $a.Identity -DefaultStateForUser Enabled
```

This example changes the organization app named FinanceTestApp, which was installed to everyone in the organization, to be provided to members of the Finance Team group and to be enabled by default.

For more information, see Manage user access to add-ins for Outlook (https://technet.microsoft.com/library/jj943757.aspx).

### -------------------------- Example 2 --------------------------
```
Set-App -OrganizationApp -Identity 3f10017a-9bbe-4a23-834b-6a8fe3af0e37 -Enabled $false
```

This example disables the organization app named FinanceTestApp across the organization and hides it from end user view.

For more information, see Manage user access to add-ins for Outlook (https://technet.microsoft.com/library/jj943757.aspx).

## PARAMETERS

### -Identity
The Identity parameter specifies the AppID (GUID value) of the app that you want to modify. To find the GUID value of an app, run the command Get-App | Format-Table -Auto DisplayName,AppId.

```yaml
Type: AppIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultStateForUser
The DefaultStateForUser parameter specifies the default initial state of the organization app for the specified users. Valid values are:

- Enabled: The organization app is enabled.

- Disabled: The organization app is disabled. This is the default value.

- AlwaysEnabled: The organization app is enabled, and users can't disable it.

You use this parameter with the OrganizationApp switch.

```yaml
Type: Enabled | Disabled | AlwaysEnabled
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the app is available to users in the organization. Valid values are:

- $true: The app is enabled for the specified users. This is the default value.

- $false: The app isn't enabled for any users in the organization. This hides the app from user view for all users.

This setting overrides the ProvidedTo, UserList, and DefaultStateForUser settings. This setting doesn't prevent users from installing their own instance of the app if they have install permissions.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationApp
The OrganizationApp switch specifies that the scope of the app is organizational (not bound to a specific user). You don't need to specify a value with this switch.

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

### -ProvidedTo
The ProvidedTo parameter specifies the availability of the app in your organization. Valid value are:

- Everyone: The app is provided to every user in the organization. This is the default value. Every user sees this app listed in the installed apps list in Outlook on the web Options. When an app in the installed apps list is enabled, users can use the features of this app in their email. All users are blocked from installing their own instances of this app, including but not limited to users with install apps permissions.

- SpecificUsers: This app is provided to only the users specified by the UserList parameter. All other users don't see this organizational app in their management view, nor will it activate in their mail or calendar items. The specified users are also blocked from installing their own instance of this app. Unlisted users aren't blocked from installing their own instance of this app.

You use this parameter with the OrganizationApp switch.

```yaml
Type: Everyone | SpecificUsers
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserList
The UserList parameter specifies who can use an organizational app. This parameter is currently limited to 1000 users. This will not change in the future as we are planning on moving to Centralized Deployment (https://docs.microsoft.com/office/dev/add-ins/publish/centralized-deployment).

Valid values are mailboxes or mail users in your organization. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>". Maximum size of the list is 1000 recipients.

You use this parameter with the OrganizationApp switch.

```yaml
Type: MultiValuedProperty
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

### -PrivateCatalog
The PrivateCatalog switch specifies that the app you want to modify is located in a private catalog. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/3506b2b9-dc23-4ed9-84f5-8839c4c3c974.aspx)
