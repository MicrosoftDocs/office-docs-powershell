---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Update-CsUserData

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Uses previously-exported user information to update Lync Server user data.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Uses previously-exported user information to update Skype for Business Server 2015 user data.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Update-CsUserData [-FileName] <String> [-Confirm] [-DomainController <Fqdn>] [-Force]
 [-RoutingGroupFilter <String>] [-UserFilter <String>] [-WhatIf] [-TargetPoolFqdn <Fqdn>] [-TestMode]
 [-ThreadCount <Int32>] [-UserFileFilter <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Update-CsUserData cmdlet enables administrators to update user data for a specified user or set of users.
(Note that this data must have previously been exported by using the Export-CsUserData cmdlet.) This updating is typically done in order to restore lost data to a logged-on user.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Update-CsUserData"}

Lync Server Control Panel: The functions carried out by the Update-CsUserData cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Update-CsUserData cmdlet enables administrators to update user data for a specified user or set of users.
(Note that this data must have previously been exported by using the Export-CsUserData cmdlet.) This updating is typically done in order to restore lost data to a logged-on user.

Skype for Business Server Control Panel: The functions carried out by the Update-CsUserData cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 updates Lync Server user data based on information stored in the file C:\Logs\ExportedUserData.zip.

Update-CsUserData -Filename "C:\Logs\ExportedUserData.zip"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 updates Skype for Business Server 2015 user data based on information stored in the file C:\Logs\ExportedUserData.zip.

Update-CsUserData -Filename "C:\Logs\ExportedUserData.zip"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, user data is updated for a single user: the user with the SIP address kenmyer@litwareinc.com.
This is done by including the UserFilter parameter followed by the user's SIP address (minus the sip: prefix).

Update-CsUserData -Filename "C:\Logs\ExportedUserData.zip" -UserFilter "kenmyer@litwareinc.com"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, user data is updated for a single user: the user with the SIP address kenmyer@litwareinc.com.
This is done by including the UserFilter parameter followed by the user's SIP address (minus the sip: prefix).

Update-CsUserData -Filename "C:\Logs\ExportedUserData.zip" -UserFilter "kenmyer@litwareinc.com"

## PARAMETERS

### -FileName
Full path to the .ZIP file or .XML file containing the user data to be updated.
For example:

-FileName "C:\Data\Lync2010.zip"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
**Below Content Applies To:** Lync Server 2013

Enables administrators to specify the FQDN of the domain controller to be used when running Update-CsUserData.
If not specified, the cmdlet will use the first available domain controller.



**Below Content Applies To:** Skype for Business Server 2015

Enables administrators to specify the FQDN of the domain controller to be used when running the Update-CsUserData cmdlet.
If not specified, the cmdlet will use the first available domain controller.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoutingGroupFilter
Enables you to update data only for the specified routing groups.
Routing groups are used to indicate the Front End server that users register with.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserFilter
Enables you to update data for a single user.
That user specified by using his or her SIP address, minus the sip: prefix.
For example:

-UserFilter "kenmyer@litwareinc.com"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetPoolFqdn
Registrar pool containing the user accounts to be updated.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestMode
When included in a command, Update-CsUserData will verify that the data can be updated, but will not actually update that data.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThreadCount
Number of threads that can be devoted to the update task.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserFileFilter
Full path to a text file containing a list of user URIs for whom data should be exported.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Update-CsUserData does not accept pipelined input.

###  
None.
The Update-CsUserData cmdlet does not accept pipelined input.

## OUTPUTS

###  
Update-CsUserData updates Lync Server user information.

###  
The Update-CsUserData cmdlet updates Skype for Business Server 2015 user information.

## NOTES

## RELATED LINKS

[Convert-CsUserData]()

[Export-CsUserData]()

[Import-CsUserData]()

[Sync-CsUserData]()

[Online Version](http://technet.microsoft.com/EN-US/library/e3cb48e9-9b5e-4c73-ab54-4aea16533ed8(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e3cb48e9-9b5e-4c73-ab54-4aea16533ed8(OCS.16).aspx)

