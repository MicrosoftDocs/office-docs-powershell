---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsComputer

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Test-CsComputer verifies the status of the Microsoft Lync Server 2010 services running on the local computer.
The cmdlet also verifies that the appropriate Lync Server 2010 Active Directory groups have been added to the corresponding local groups on the computer, and that the necessary computer firewall ports have been opened.

Below Content Applies To: Lync Server 2013

Test-CsComputer verifies the status of the Lync Server services running on the local computer.
The cmdlet also verifies that the appropriate Lync Server Active Directory groups have been added to the corresponding local groups on the computer, and that the necessary computer firewall ports have been opened.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

The Test-CsComputer cmdlet verifies the status of the Skype for Business Server 2015 services running on the local computer.
The cmdlet also verifies that the appropriate Skype for Business Server 2015 Active Directory groups have been added to the corresponding local groups on the computer, and that the necessary computer firewall ports have been opened.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Test-CsComputer [-Report <String>] [-Verbose] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Test-CsComputer is an example of a Lync Server 2010 "synthetic transaction." Synthetic transactions are used in Lync Server 2010 to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be run automatically by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Test-CsComputer, which can be run only on the local computer, verifies the status of all the Lync Server 2010 services on that computer.
The cmdlet also checks to see if the appropriate firewall ports have been opened on the computer, and determines whether or not the Active Directory groups created when you installed Lync Server 2010 have been added to the corresponding local groups.
For example, Test-CsComputer will verify that the Active Directory group RTCUniversalUserAdmins has been added to the local Administrators group.

Below Content Applies To: Lync Server 2013

Test-CsComputer is an example of a Lync Server "synthetic transaction." Synthetic transactions are used in Lync Server to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be run automatically by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

Test-CsComputer, which can be run only on the local computer, verifies the status of all the Lync Server services on that computer.
The cmdlet also checks to see if the appropriate firewall ports have been opened on the computer, and determines whether or not the Active Directory groups created when you installed Lync Server have been added to the corresponding local groups.
For example, Test-CsComputer will verify that the Active Directory group RTCUniversalUserAdmins has been added to the local Administrators group.

Below Content Applies To: Skype for Business Server 2015

The Test-CsComputer cmdlet is an example of a Skype for Business Server 2015 "synthetic transaction." Synthetic transactions are used in Skype for Business Server 2015 to verify that users are able to successfully complete common tasks such as logging on to the system, exchanging instant messages, or making calls to a phone located on the public switched telephone network (PSTN).
These tests can be conducted manually by an administrator, or they can be run automatically by an application such as Microsoft System Center Operations Manager (formerly Microsoft Operations Manager).

The Test-CsComputer cmdlet, which can be run only on the local computer, verifies the status of all the Skype for Business Server 2015 services on that computer.
The cmdlet also checks to see if the appropriate firewall ports have been opened on the computer, and determines whether or not the Active Directory groups created when you installed Skype for Business Server 2015 have been added to the corresponding local groups.
For example, the Test-CsComputer cmdlet will verify that the Active Directory group RTCUniversalUserAdmins has been added to the local Administrators group.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Test-CsComputer -Verbose
```

The command shown in Example 1 verifies the service activation status for the local computer.
The Verbose parameter is included in the command to ensure that the success (or failure) of the operation is fully reported on the screen.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 verifies the service activation status for the local computer.
The Verbose parameter is included in the command to ensure that the success (or failure) of the operation is fully reported on the screen.

Test-CsComputer -Verbose

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 verifies the service activation status for the local computer.
The Verbose parameter is included in the command to ensure that the success (or failure) of the operation is fully reported on the screen.

Test-CsComputer -Verbose

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Test-CsComputer -Verbose -Report C:\Logs\Computer.html
```

The preceding command also verifies the service activation status of the local computer.
In addition, this command writes detailed information about the activation status to the file C:\Logs\Computer.html.
This log is generated by including the Report parameter followed by the full path to the log file where the information should be recorded.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 also verifies the service activation status of the local computer.
In addition, this command writes detailed information about the activation status to the file C:\Logs\Computer.html.
This log is generated by including the Report parameter followed by the full path to the log file where the information should be recorded.

Test-CsComputer -Verbose -Report C:\Logs\Computer.html

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 also verifies the service activation status of the local computer.
In addition, this command writes detailed information about the activation status to the file C:\Logs\Computer.html.
This log is generated by including the Report parameter followed by the full path to the log file where the information should be recorded.

Test-CsComputer -Verbose -Report C:\Logs\Computer.html

## PARAMETERS

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\Computer.html".
If this file already exists, it will be overwritten when you run the cmdlet.

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
Test-CsComputer does not accept pipelined input.

###  
None.
The Test-CsComputer cmdlet does not accept pipelined input.

## OUTPUTS

###  
Test-CsComputer returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

###  
The Test-CsComputer cmdlet returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0b33d951-510d-445c-9b01-c6431fda6d47(OCS.14).aspx)

[Disable-CsComputer]()

[Enable-CsComputer]()

[Get-CsComputer]()

[Online Version](http://technet.microsoft.com/EN-US/library/0b33d951-510d-445c-9b01-c6431fda6d47(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0b33d951-510d-445c-9b01-c6431fda6d47(OCS.16).aspx)

