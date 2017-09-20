---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Test-CsSetupPermission
schema: 2.0.0
---

# Test-CsSetupPermission

## SYNOPSIS
Verifies that the required permissions needed to install Skype for Business Server or one of its components have been configured on the specified Active Directory container.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsSetupPermission -ComputerOU <String> [-Domain <Fqdn>] [-DomainController <Fqdn>] [-GlobalCatalog <Fqdn>]
 [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
The domain preparation that takes place when you install Skype for Business Server does not automatically add the permissions that enable members of the RTCUniversalServerAdmins group to run the `Enable-CsTopology` cmdlet.
That means that, by default, you must be a domain administrator in order to enable a topology.
To give members of the RTCUniversalServerAdmins group the right to enable a topology, you must run the `Grant-CsSetupPermissions` cmdlet.
In addition, you will need to run this cmdlet against each Active Directory container that houses computers running Skype for Business Server.

The `Test-CsSetupPermission` cmdlet enables you to determine whether or not the requisite permissions have been added to a given Active Directory container (that is, a container hosting computers running Skype for Business Server).
The `Test-CsSetupPermission` cmdlet returns True if the correct permissions have been applied, and returns False if the correct permissions have not been applied.
If the cmdlet returns False, you will need to run the `Grant-CsSetupPermission` cmdlet in order to make the necessary changes to the Active Directory container.


## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```
Test-CsSetupPermission -ComputerOU "ou=CsServers,dc=litwareinc,dc=com"
```

The command shown in Example 1 checks to see if the required setup permissions have been applied to the CsServers OU in the litwareinc.com domain.


## PARAMETERS

### -ComputerOU
Distinguished name of the organizational unit (OU) that contains the accounts for the computers running Skype for Business Server.
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
Name of the domain where the OU to be checked is located.
If this parameter is not included, then the `Test-CsSetupPermission` cmdlet will look for the OU in the current domain.


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
Fully qualified domain name (FQDN) of a domain controller in your domain.
This parameter is not required if you are running the `Test-CsSetupPermission` cmdlet on a computer with an account in your domain.


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
FQDN of a global catalog server in your domain.
This parameter is not required if you are running the `Test-CsSetupPermission` cmdlet on a computer with an account in your domain.


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
The `Test-CsSetupPermission` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsSetupPermission` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Grant-CsSetupPermission]()

[Revoke-CsSetupPermission]()
