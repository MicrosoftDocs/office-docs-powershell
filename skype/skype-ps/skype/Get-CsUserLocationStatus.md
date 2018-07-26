---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsUserLocationStatus
schema: 2.0.0
---

# Get-CsUserLocationStatus

## SYNOPSIS
With `Get-CsUserLocationStatus` you can track the progress of the regionally hosted meetings cross region move and determine when it has completed.

Get-CsUserLocationStatus \[\[-Tenant\] \<guid\>\] \[\[-Identity\] \<UserIdParameter\>\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
Get-CsUserLocationStatus [[-Tenant] <Guid>] [[-Identity] <UserIdParameter>] [-Confirm] [-WhatIf] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
With regionally hosted meetings, you can take advantage of Microsoft Office 365 data centers located all over the world, and you can choose where your users are located in the Microsoft cloud. Your users log in to local data centers and therefore benefit from regional performance for meetings within the cloud.

The `Get-CsUserLocationStatus` tracks the progress of the cross region move and determine when it has completed.

## EXAMPLES

### -------------------------- EXAMPLE 1 --------------------------
```
PS C:\> Get-CsUserLocationStatus -Identity PilarA@contoso.com
```

This example tracks the progress of the cross region move for PilarA@contoso.com account.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the Identity of the user account to be verified. User Identities can be specified using one of four formats:

1) the user's SIP address;
2) the user's user principal name (UPN);
3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer)
4) the user's Active Directory display name (for example, Ken Myer), (only available if using the on-premises cmdlets) User Identities can also be referenced by using the user's Active Directory distinguished name.
You can use the asterisk (\*) wildcard character when using the display name as the user Identity. For example, the Identity "*\Smith" returns all the users who have a display name that ends with the string value "Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

