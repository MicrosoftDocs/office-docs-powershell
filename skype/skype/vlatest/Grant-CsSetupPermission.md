---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Grant-CsSetupPermission

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Grants Microsoft Lync Server 2010 setup permissions on an Active Directory organizational unit (OU).

**Below Content Applies To:** Lync Server 2013

Grants Lync Server setup permissions on an Active Directory organizational unit (OU).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Grants Skype for Business Server 2015 setup permissions on an Active Directory organizational unit (OU).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsSetupPermission -ComputerOU <String> [-Domain <Fqdn>] [-DomainController <Fqdn>]
 [-GlobalCatalog <Fqdn>] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The domain preparation that takes place when you install Lync Server 2010 does not automatically add the permissions that enable members of the RTCUniversalServerAdmins group to run the Enable-CsTopology cmdlet.
That means that, by default, you must be a domain administrator in order to enable a topology.
To give members of the RTCUniversalServerAdmins group the right to enable a topology you must run the Grant-CsSetupPermissions cmdlet.
In addition, you will need to run this cmdlet against each Active Directory container that houses computers running Lync Server.

Keep in mind that this cmdlet only grants permissions to the RTCUniversalServerAdmins group; the cmdlet cannot be used to grant permissions to other security groups or to individual users.

Who can run this cmdlet: You must be a domain administrator in order to run the Grant-CsSetupPermission cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Grant-CsSetupPermission"}

**Below Content Applies To:** Lync Server 2013

The domain preparation that takes place when you install Lync Server does not automatically add the permissions that enable members of the RTCUniversalServerAdmins group to run the Enable-CsTopology cmdlet.
That means that, by default, you must be a domain administrator in order to enable a topology.
To give members of the RTCUniversalServerAdmins group the right to enable a topology you must run the Grant-CsSetupPermissions cmdlet.
In addition, you will need to run this cmdlet against each Active Directory container that houses computers running Lync Server.

Keep in mind that this cmdlet only grants permissions to the RTCUniversalServerAdmins group; the cmdlet cannot be used to grant permissions to other security groups or to individual users.

Who can run this cmdlet: You must be a domain administrator in order to run the Grant-CsSetupPermission cmdlet locally.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Grant-CsSetupPermission"}

**Below Content Applies To:** Skype for Business Server 2015

The domain preparation that takes place when you install Skype for Business Server 2015 does not automatically add the permissions that enable members of the RTCUniversalServerAdmins group to run the Enable-CsTopology cmdlet.
That means that, by default, you must be a domain administrator in order to enable a topology.
To give members of the RTCUniversalServerAdmins group the right to enable a topology you must run the Grant-CsSetupPermissions cmdlet.
In addition, you will need to run this cmdlet against each Active Directory container that houses computers running Skype for Business Server 2015.

Keep in mind that this cmdlet only grants permissions to the RTCUniversalServerAdmins group; the cmdlet cannot be used to grant permissions to other security groups or to individual users.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Grant-CsSetupPermission -ComputerOU "ou=CsServers,dc=litwareinc,dc=com"
```

The command shown in Example 1 grants setup permissions for the CsServers OU in the domain litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 grants setup permissions for the CsServers OU in the domain litwareinc.com.

Grant-CsSetupPermission -ComputerOU "ou=CsServers,dc=litwareinc,dc=com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 grants setup permissions for the CsServers OU in the domain litwareinc.com.

Grant-CsSetupPermission -ComputerOU "ou=CsServers,dc=litwareinc,dc=com"

## PARAMETERS

### -ComputerOU
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Distinguished name of the OU containing the accounts for the computers where Lync Server will be (or has been) installed.
For example: "ou=CsServers,dc=litwareinc,dc=com".

If you prefer you can leave off the domain portion of the distinguished name when specifying the OU.
For example:

-ComputerOU "ou=CsServers"



**Below Content Applies To:** Skype for Business Server 2015

Distinguished name of the OU containing the accounts for the computers where Skype for Business Server 2015 will be (or has been) installed.
For example: "ou=CsServers,dc=litwareinc,dc=com".

If you prefer you can leave off the domain portion of the distinguished name when specifying the OU.
For example:

-ComputerOU "ou=CsServers"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Name of the domain where the OU is located.
If this parameter is not included, then Grant-CsSetupPermission will look for the OU in the current domain.



**Below Content Applies To:** Skype for Business Server 2015

Name of the domain where the OU is located.
If this parameter is not included, then the Grant-CsSetupPermission cmdlet will look for the OU in the current domain.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified name of the domain controller to be contacted when assigning the policy.
For example: -DomainController atl-dc-001.litwareinc.com.

If not specified, Grant-CsSetupPermission will contact the nearest available domain controller when assigning the policy.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified name of the domain controller to be contacted when assigning the policy.
For example:

-DomainController atl-dc-001.litwareinc.com

If not specified, the Grant-CsSetupPermission cmdlet will contact the nearest available domain controller when assigning the policy.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified name of the global catalog server to be contacted when assigning the policy.
For example: -GlobalCatalog atl-dc-001.litwareinc.com.

If not specified, Grant-CsSetupPermission will contact the nearest available global catalog server when assigning the policy.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified name of the global catalog server to be contacted when assigning the policy.
For example:

-GlobalCatalog atl-dc-001.litwareinc.com

If not specified, the Grant-CsSetupPermission cmdlet will contact the nearest available global catalog server when assigning the policy.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\SetupPermissions.html"



**Below Content Applies To:** Skype for Business Server 2015

Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

-Report "C:\Logs\SetupPermissions.html"



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Grant-CsSetupPermission does not accept pipelined input.

###  
None.
The Grant-CsSetupPermission cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Grant-CsSetupPermission does not return any objects or values.

###  
None.
The Grant-CsSetupPermission cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/753bccc1-edb4-48c9-bd0a-2db5d86f8c5e(OCS.14).aspx)

[Revoke-CsSetupPermission]()

[Test-CsSetupPermission]()

[Online Version](http://technet.microsoft.com/EN-US/library/753bccc1-edb4-48c9-bd0a-2db5d86f8c5e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/753bccc1-edb4-48c9-bd0a-2db5d86f8c5e(OCS.16).aspx)

