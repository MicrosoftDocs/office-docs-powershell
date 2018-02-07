---
applicable: Exchange Online Protection
schema: 2.0.0
---

# New-EOPDistributionGroup

## SYNOPSIS
This cmdlet is available only in Exchange Online Protection.

Use the New-EOPDistributionGroup cmdlet to create distribution groups or mail-enabled security groups in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the New-DistributionGroup cmdlet.

Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP.

This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-EOPDistributionGroup -Name <String> [-Alias <String>] [-DisplayName <String>] [-ManagedBy <String[]>]
 [-Members <String[]>] [-Notes <String>] [-PrimarySmtpAddress <SmtpAddress>] [-Type <Distribution | Security>]
 [<CommonParameters>]
```

## DESCRIPTION
You can use the New-EOPDistributionGroup cmdlet to create the following types of groups:

- Mail-enabled universal security group (USG)

- Universal distribution group

Distribution groups are used to consolidate groups of recipients into a single point of contact for email messages. Security groups are used to grant permissions to multiple users.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Online Protection)
```
New-EOPDistributionGroup -Name Managers -Type Security -ManagedBy "Kitty Petersen"
```

This example creates a mail-enabled universal security group named Managers that's managed by Kitty Petersen.

### Example 2 -------------------------- (Exchange Online Protection)
```
New-EOPDistributionGroup -Name "Security Team" -ManagedBy "Tyson Fawcett" -Alias SecurityTeamThree -DisplayName "Security Team" -Notes "Security leads from each division" -PrimarySmtpAddress SecTeamThree@contoso.com -Type Distribution -Members @("Tyson Fawcett","Kitty Petersen")
```

This example creates a distribution group named "Security Team" and adds two users to the group.

## PARAMETERS

### -Name
The Name parameter specifies the name of the distribution group object. The value specified in the Name parameter is also used for the DisplayName parameter if the DisplayName parameter isn't specified.

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

### -Alias
The Alias parameter specifies the email alias of the distribution group. The Alias parameter value is used to generate the primary SMTP email address if you don't use the PrimarySmtpAddress parameter.

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
The DisplayName parameter specifies the name of the distribution group in the Exchange admin center (EAC). If the DisplayName parameter isn't specified, the value of the Name parameter is used for the DisplayName parameter.

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

### -ManagedBy
The ManagedBy parameter specifies a user who owns the group. In Exchange Online Protection, you need to use this parameter to specify at least one group owner. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can specify multiple owners by using the following syntax: @("\<user1\>","\<user2\>"...).

The users you specify with this parameter aren't automatically added to the group. To add members to the group, use the Update-EOPDistributionGroupMember cmdlet.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Members
The Members parameter specifies the initial list of recipients (mail-enabled objects) in the distribution group. In Exchange Online Protection, the valid recipient types are:

- Mail users

- Distribution groups

- Mail-enabled security groups

You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can specify multiple recipients by using the following syntax: @("\<recipient1\>","\<recipient2\>"...).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes
The Notes parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks (").

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

### -PrimarySmtpAddress
The PrimarySmtpAddress parameter specifies the primary return SMTP email address for the distribution group.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter specifies the group type. Valid values are Distribution or Security.

```yaml
Type: Distribution | Security
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

[Online Version](https://technet.microsoft.com/library/4610dfe5-fca8-4ba8-be3c-535d1753e0f4.aspx)

