---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online Protection
title: New-EOPMailUser
schema: 2.0.0
monikerRange: "eop-ps"
---

# New-EOPMailUser

## SYNOPSIS
This cmdlet is available only in Exchange Online Protection.

Use the New-EOPMailUser cmdlet to create mail users, also known as mail-enabled users, in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the New-MailUser cmdlet.

Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP.

This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-EOPMailUser -MicrosoftOnlineServicesID <WindowsLiveId> -Name <String> -Password <String> [-Alias <String>]
 [-DisplayName <String>] [-ExternalEmailAddress <ProxyAddress>] [-FirstName <String>] [-Initials <String>]
 [-LastName <String>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-EOPMailUser -Name EdMeadows -MicrosoftOnlineServicesID EdMeadows@Contoso.onmicrosoft.com -ExternalEmailAddress EdMeadows@tailspintoys.com -Password (ConvertTo-SecureString -String 'Pa$$w0rd' -AsPlainText -Force) -FirstName Ed -LastName Meadows -DisplayName "Ed Meadows" -Alias edm
```

This example creates a mail user object for Ed Meadows while specifying several additional optional parameters and using an in-line method of password encryption.

## PARAMETERS

### -MicrosoftOnlineServicesID
The MicrosoftOnlineServicesID parameter specifies the user ID for the object. This parameter only applies to objects in the cloud-based service. It isn't available for on-premises deployments.

```yaml
Type: WindowsLiveId
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the mail user object. The value specified in the Name parameter is also used for the DisplayName parameter if the DisplayName parameter isn't specified.

The Name parameter value can't exceed 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
The Password parameter the password for the mail user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the alias of the mail user.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the name of the mail user in the Exchange admin center (EAC).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalEmailAddress
The ExternalEmailAddress parameter specifies the user's email address that's outside of the Exchange Online Protection organization. Email messages sent to the mail user are relayed to this external address.

```yaml
Type: ProxyAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstName
The FirstName parameter specifies the user's first name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Initials
The Initials parameter specifies the user's middle initials.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LastName
The LastName parameter specifies the user's last name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/0520cf33-4ad0-44e4-99a3-1b485739fc05.aspx)
