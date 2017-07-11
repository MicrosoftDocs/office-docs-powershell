---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsSetupPermission

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Verifies that the required permissions needed to install Microsoft Lync Server 2010 or one of its components have been configured on the specified Active Directory container.

Below Content Applies To: Lync Server 2013

Verifies that the required permissions needed to install Lync Server or one of its components have been configured on the specified Active Directory container.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Verifies that the required permissions needed to install Skype for Business Server 2015 or one of its components have been configured on the specified Active Directory container.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Test-CsSetupPermission -ComputerOU <String> [-Domain <Fqdn>] [-DomainController <Fqdn>] [-GlobalCatalog <Fqdn>]
 [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

The domain preparation that takes place when you install Lync Server 2010 does not automatically add the permissions that enable members of the RTCUniversalServerAdmins group to run the Enable-CsTopology cmdlet.
That means that, by default, you must be a domain administrator in order to enable a topology.
To give members of the RTCUniversalServerAdmins group the right to enable a topology, you must run the Grant-CsSetupPermissions cmdlet.
In addition, you will need to run this cmdlet against each Active Directory container that houses computers running Lync Server.

The Test-CsSetupPermission cmdlet enables you to determine whether or not the requisite permissions have been added to a given Active Directory container (that is, a container hosting computers running Lync Server).
Test-CsSetupPermission returns True if the correct permissions have been applied, and returns False if the correct permissions have not been applied.
If the cmdlet returns False, you will need to run Grant-CsSetupPermission in order to make the necessary changes to the Active Directory container.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShellWindows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsSetupPermission"}

Below Content Applies To: Lync Server 2013

The domain preparation that takes place when you install Lync Server does not automatically add the permissions that enable members of the RTCUniversalServerAdmins group to run the Enable-CsTopology cmdlet.
That means that, by default, you must be a domain administrator in order to enable a topology.
To give members of the RTCUniversalServerAdmins group the right to enable a topology, you must run the Grant-CsSetupPermissions cmdlet.
In addition, you will need to run this cmdlet against each Active Directory container that houses computers running Lync Server.

The Test-CsSetupPermission cmdlet enables you to determine whether or not the requisite permissions have been added to a given Active Directory container (that is, a container hosting computers running Lync Server).
Test-CsSetupPermission returns True if the correct permissions have been applied, and returns False if the correct permissions have not been applied.
If the cmdlet returns False, you will need to run Grant-CsSetupPermission in order to make the necessary changes to the Active Directory container.

Who can run this cmdlet: To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsSetupPermission"}

Below Content Applies To: Skype for Business Server 2015

The domain preparation that takes place when you install Skype for Business Server 2015 does not automatically add the permissions that enable members of the RTCUniversalServerAdmins group to run the Enable-CsTopology cmdlet.
That means that, by default, you must be a domain administrator in order to enable a topology.
To give members of the RTCUniversalServerAdmins group the right to enable a topology, you must run the Grant-CsSetupPermissions cmdlet.
In addition, you will need to run this cmdlet against each Active Directory container that houses computers running Skype for Business Server 2015.

The Test-CsSetupPermission cmdlet enables you to determine whether or not the requisite permissions have been added to a given Active Directory container (that is, a container hosting computers running Skype for Business Server 2015).
The Test-CsSetupPermission cmdlet returns True if the correct permissions have been applied, and returns False if the correct permissions have not been applied.
If the cmdlet returns False, you will need to run the Grant-CsSetupPermission cmdlet in order to make the necessary changes to the Active Directory container.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Test-CsSetupPermission -ComputerOU "ou=CsServers,dc=litwareinc,dc=com"
```

The command shown in Example 1 checks to see if the required setup permissions have been applied to the CsServers OU in the litwareinc.com domain.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 checks to see if the required setup permissions have been applied to the CsServers OU in the litwareinc.com domain.

Test-CsSetupPermission -ComputerOU "ou=CsServers,dc=litwareinc,dc=com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 checks to see if the required setup permissions have been applied to the CsServers OU in the litwareinc.com domain.

Test-CsSetupPermission -ComputerOU "ou=CsServers,dc=litwareinc,dc=com"

## PARAMETERS

### -ComputerOU
Below Content Applies To: Lync Server 2010, Lync Server 2013

Distinguished name of the organizational unit (OU) that contains the accounts for the computers running Lync Server.
For example: "ou=CsServers,dc=litwareinc,dc=com".



Below Content Applies To: Skype for Business Server 2015

Distinguished name of the organizational unit (OU) that contains the accounts for the computers running Skype for Business Server 2015.
For example: "ou=CsServers,dc=litwareinc,dc=com".



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
Below Content Applies To: Lync Server 2010, Lync Server 2013

Name of the domain where the OU to be checked is located.
If this parameter is not included, then Test-CsSetupPermission will look for the OU in the current domain.



Below Content Applies To: Skype for Business Server 2015

Name of the domain where the OU to be checked is located.
If this parameter is not included, then the Test-CsSetupPermission cmdlet will look for the OU in the current domain.



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
Below Content Applies To: Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of a domain controller in your domain.
This parameter is not required if you are running Test-CsSetupPermission on a computer with an account in your domain.



Below Content Applies To: Skype for Business Server 2015

Fully qualified domain name (FQDN) of a domain controller in your domain.
This parameter is not required if you are running the Test-CsSetupPermission cmdlet on a computer with an account in your domain.



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
Below Content Applies To: Lync Server 2010, Lync Server 2013

FQDN of a global catalog server in your domain.
This parameter is not required if you are running Test-CsSetupPermission on a computer with an account in your domain.



Below Content Applies To: Skype for Business Server 2015

FQDN of a global catalog server in your domain.
This parameter is not required if you are running the Test-CsSetupPermission cmdlet on a computer with an account in your domain.



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

### -Report
Reports detailed activity to the screen as the cmdlet runs.

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

### -Verbose
Reports detailed activity to the screen as the cmdlet runs.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: vb
Applicable: Lync Server 2010

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
Test-CsSetupPermission does not accept pipelined input.

###  
None.
The Test-CsSetupPermission cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsSetupPermission returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsSetupPermission cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/604ccb97-278a-4588-9ab8-991aaabae275(OCS.14).aspx)

[Grant-CsSetupPermission]()

[Revoke-CsSetupPermission]()

[Online Version](http://technet.microsoft.com/EN-US/library/604ccb97-278a-4588-9ab8-991aaabae275(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/604ccb97-278a-4588-9ab8-991aaabae275(OCS.16).aspx)

