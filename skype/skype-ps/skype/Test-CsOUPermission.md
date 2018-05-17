---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsOUPermission
schema: 2.0.0
---

# Test-CsOUPermission

## SYNOPSIS
Verifies that the required permissions needed to manage users, computers, and other objects have been set on the specified Active Directory container.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsOUPermission -ObjectType <ObjectType> -OU <String> [-Domain <Fqdn>] [-DomainController <Fqdn>]
 [-GlobalCatalog <Fqdn>] [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
If you have locked down your Active Directory domain (that is, if you have disabled permission inheritance), then the domain preparation that takes place when you install Skype for Business Server will not be able to add the permissions needed to manage users, computers, contacts, application contacts, and InetOrg persons.
(Domain administrators will still be able to manage these objects, but no one else, including members of the RTCUniversalServerAdmins group, will have management permissions.) In that case, you will need to use the `Grant-CsOUPermission` cmdlet to grant the RTCUniversalServerAdmins group the appropriate permissions.
In addition, you will need to do this on a container-by-container basis.

The `Test-CsOUPermission` cmdlet enables you to determine whether or not the required permissions have been added to a specified Active Directory container.
The `Test-CsOUPermission` cmdlet returns True if the correct permissions have been applied, and returns False if the correct permissions have not been applied.
If the cmdlet returns False, you will then need to run the `Grant-CsOUPermission` cmdlet in order to make the necessary changes.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Test-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user"
```

The command shown in Example 1 verifies that user permissions have been set on the Redmond OU in the litwareinc.com domain.


## PARAMETERS

### -ObjectType
Type of object to be checked.
Valid values are:

User

Computer

Contact

AppContact

InetOrgPerson

To check multiple objects in the same kind, separate the object types by using commas:

`-ObjectType "user","computer","contact"`


```yaml
Type: ObjectType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Distinguished name of the organizational unit (OU) to be checked.
For example:

`-OU "ou=Redmond,dc=litwareinc,dc=com"`

Note that you can only check a single OU per command.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain
Name of the domain where the OU to be checked is located.
If this parameter is not included, then the `Test-CsOUPermission` cmdlet will look for the OU on the current domain.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Fully qualified domain name (FQDN) of a domain controller in your domain.
This parameter is not required if you are running the `Test-CsOUPermission` cmdlet on a computer with an account in your domain.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog
FQDN of a global catalog server in your domain.
This parameter is not required if you are running the `Test-CsOUPermission` cmdlet on a computer with an account in your domain.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

`-Report "C:\Logs\OUPermissions.html"`

If this file already exists, it will be overwritten when you run the cmdlet.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Test-CsOUPermission` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Test-CsOUPermission` cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Grant-CsOUPermission](Grant-CsOUPermission.md)

[Revoke-CsOUPermission](Revoke-CsOUPermission.md)

