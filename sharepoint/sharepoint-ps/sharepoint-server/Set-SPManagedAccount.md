---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPManagedAccount
schema: 2.0.0
---

# Set-SPManagedAccount

## SYNOPSIS
Configures the managed account.


## SYNTAX

### NewPassword
```
Set-SPManagedAccount [-Identity] <SPManagedAccountPipeBind> -ConfirmPassword <SecureString>
 -NewPassword <SecureString> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-EmailNotification <Int32>] [-PreExpireDays <Int32>] [-Schedule <String>] [-SetNewPassword] [-WhatIf]
 [<CommonParameters>]
```

### ExistingPassword
```
Set-SPManagedAccount [-Identity] <SPManagedAccountPipeBind> -ExistingPassword <SecureString>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-EmailNotification <Int32>]
 [-PreExpireDays <Int32>] [-Schedule <String>] [-UseExistingPassword] [-WhatIf] [<CommonParameters>]
```

### NewPasswordAsParameter
```
Set-SPManagedAccount [-Identity] <SPManagedAccountPipeBind> -Password <SecureString>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-EmailNotification <Int32>]
 [-PreExpireDays <Int32>] [-Schedule <String>] [-WhatIf] [<CommonParameters>]
```

### AutoGeneratePassword
```
Set-SPManagedAccount [-Identity] <SPManagedAccountPipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-AutoGeneratePassword] [-Confirm] [-EmailNotification <Int32>] [-PreExpireDays <Int32>] [-Schedule <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `Set-SPManagedAccount` cmdlet sets the properties on the given managed account.

You can use this cmdlet to change the password expiration and notification settings for the managed account: Use the default parameter set.
Additionally, you can use this cmdlet to change the password for the managed account to automatically generated passwords on a set schedule: Use the parameter set that includes the AutoGeneratePassword parameter.
You can also use this cmdlet to change the password for the managed account to a new value, known to the administrator: Use the parameter set that includes the SetNewPassword parameter.
Finally, you can use this cmdlet to change the password for the managed account to an existing value that has been already been changed in Active Directory Domain Services (AD DS): Use the parameter set that includes the UseExistingPassword parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE-----------------------
```
C:\PS>$m = Get-SPManagedAccount -Identity "DOMAINx\UserY"

C:\PS>Set-SPManagedAccount -Identity $m -AutoGeneratePassword true
```

This example displays an explicit managed account if it exists and then attempts to update it to use automatically generated passwords.


## PARAMETERS

### -Identity
Specifies the full name or partial name of the managed accounts to retrieve.

The type must be a valid account name, in the form Domain\User, or a GUID, in the form 1234-3456-09876.

```yaml
Type: SPManagedAccountPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ConfirmPassword
Confirms the new password for this managed account.

```yaml
Type: SecureString
Parameter Sets: NewPassword
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExistingPassword
Sets the password for this managed account to an existing value that has already been changed in Active Directory Domain Services (AD DS).

```yaml
Type: SecureString
Parameter Sets: ExistingPassword
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewPassword
Sets a new password for the managed account

```yaml
Type: SecureString
Parameter Sets: NewPassword
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
Sets a password for the managed account.

```yaml
Type: SecureString
Parameter Sets: NewPasswordAsParameter
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AutoGeneratePassword
Automatically generates a new password.

The type must be either of the following values:

- True
- False

The default value is False.

```yaml
Type: SwitchParameter
Parameter Sets: AutoGeneratePassword
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailNotification
Specifies the number of days before password change to begin e-mail notifications.

The default value is 5.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreExpireDays
Specifies the number of days before expiration to schedule password change.

The default value is 2.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Schedule
Specifies the new schedule on which the password change job is to run.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetNewPassword
Sets the password to the new value that is passed in, and changes the value in AD DS.

The type must be either of the following values:

- True
- False

The default value is False.

```yaml
Type: SwitchParameter
Parameter Sets: NewPassword
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseExistingPassword
Sets the password to a new value passed in where the value is already changed in AD DS.

The type must be either of the following values:

- True
- False

The default value is False.

```yaml
Type: SwitchParameter
Parameter Sets: ExistingPassword
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
