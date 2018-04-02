---
applicable: Exchange Online
schema: 2.0.0
---

# Get-UnifiedGroup

## SYNOPSIS
이 cmdlet은 클라우드 기반 서비스에서만 사용할 수 있습니다.

Get-UnifiedGroup cmdlet을 사용하면 클라우드 기반 조직에서 Office 365 그룹을 볼 수 있습니다. 
Office 365 그룹의 구성원, 소유자 및 구독자를 보려면 Get-UnifiedGroupLinks cmdlet을 사용하십시오.

아래 구문 섹션의 매개 변수 집합에 대한 자세한 내용은 Exchange cmdlet 구문을 참조하십시오. (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-UnifiedGroup [-Anr <String>] [-Filter <String>] [-IncludeSoftDeletedGroups] [-ResultSize <Unlimited>]
 [-SortBy <String>] [<CommonParameters>]
```

### Set1
```
Get-UnifiedGroup [[-Identity] <UnifiedGroupIdParameter>] [-Filter <String>] [-IncludeSoftDeletedGroups]
 [-ResultSize <Unlimited>] [-SortBy <String>] [<CommonParameters>]
```

## DESCRIPTION
Office 365 그룹은 Office 365 서비스에서 사용할 수있는 그룹 개체입니다.

이 cmdlet을 실행하려면 먼저 사용 권한을 할당 받아야합니다. 이 항목에서는 cmdlet의 모든 매개 변수를 나열하지만 할당 된 사용 권한에 포함되지 않은 경우 일부 매개 변수에 액세스하지 못할 수도 있습니다. 조직에서 cmdlet 또는 매개 변수를 실행하는 데 필요한 사용 권한을 확인하려면 모든 Exchange cmdlet을 실행하는 데 필요한 사용 권한 찾기를 참조하십시오.
(https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-UnifiedGroup
```

이 예에서는 모든 Office 365 그룹의 요약 목록을 반환합니다.

### Example 2
```
Get-UnifiedGroup | Format-List DisplayName,EmailAddresses,Notes,ManagedBy,AccessType
```

이 예에서는 아래 필드에 대한 모든 Office 365 그룹의 요약 목록을 반환합니다:


Display name

Email address

Description

Owners

Privacy

### Example 3
```
Get-UnifiedGroup -Identity "Marketing Department" | Format-List
```

이 예에서는 Marketing Department라는 Office 365 그룹에 대한 자세한 정보를 반환합니다.

## PARAMETERS

### -Anr
이 매개 변수는 Microsoft 내부에서 사용하도록 예약되어 있습니다.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Filter 매개 변수는 OPATH 필터 구문을 사용하여 지정된 속성 및 값으로 결과를 필터링합니다. 검색 기준은 구문을 사용합니다. {\<Property\> -\<Comparison operator\> '\<Value\>'}.

- \<Property\> 필터링 할 수 있는 속성입니다.

- -\<Comparison Operator\> OPATH 비교 연산자입니다. 예를 들어 equals는 -eq이고 문자열 비교는 -like입니다. 비교 연산자에 대한 자세한 내용은 \ _Comparison \ _Operators를 참조하십시오. (https://go.microsoft.com/fwlink/p/?LinkId=620712).

- \<Value\> 속성 값입니다. 공백이 있거나없는 텍스트 값은 따옴표로 묶어야합니다 ( '\ <Value \>'). 정수 또는 시스템 값에 따옴표를 사용하지 마십시오. $true, $false, or $null.

논리 연산자 인 -and 및 -or를 사용하여 여러 검색 기준을 함께 연결할 수 있습니다. 예를 들어, {\<Criteria1\>) -and \<Criteria2\>} or {(\<Criteria1\> -and \<Criteria2\>) -or \<Criteria3\>}.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
보려고 하는 Office 365 그룹에 특정한 identity 매개 변수를 지정합니다. Office 365 그룹을 고유하게 식별하는 값을 사용할 수 있습니다.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: UnifiedGroupIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeAllProperties
IncludeAllProperties 스위치는 결과에 모든 속성 값을 포함할지 여부를 지정합니다. 이 스위치로 값을 지정할 필요가 없습니다.

이 스위치를 사용하지 않으면 일부 속성 (예 : CalendarMemeberReadOnly, CalendarUrl, InboxUrl, PeopleUrl 및 PhotoUrl)의 값이 비어있을 수 있습니다.

### -IncludeSoftDeletedGroups
IncludeSoftDeletedGroups 스위치는 연쇄 적으로 삭제 된 Office 365 그룹을 결과에 포함할지 여부를 지정합니다. 이 스위치로 값을 지정할 필요가 없습니다.

이 스위치는 삭제 된 Office 365 그룹을 반환하는 데 필요합니다.

삭제 된 Office 365 그룹은 여전히 복구 할 수있는 삭제 된 그룹입니다.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
ResultSize 매개 변수는 반환 할 최대 결과 수를 지정합니다. 쿼리와 일치하는 모든 요청을 반환하려면이 매개 변수의 값으로 unlimited를 사용합니다. 기본값은 1000 입니다.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
SortBy 매개 변수는 결과를 정렬 할 속성을 지정합니다. 한 번에 하나의 속성으로 만 정렬 할 수 있습니다. 결과는 오름차순으로 정렬 됩니다.

기본 뷰에 정렬 기준으로 등록 정보가 포함되어 있지 않으면 | Format-Table -Auto \ <Property1 \>, \ <Property2 \> ... 보려는 모든 속성이 포함 된 새보기를 만듭니다. 속성 이름의 와일드 카드 (\ *)가 지원됩니다.

다음 속성별로 정렬 할 수 있습니다:

- Name

- DisplayName

- Alias

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
이 cmdlet은 -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction 및 -WarningVariable 매개 변수를 지원합니다. 자세한 내용은 about_CommonParameters를 참조하십시오. (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
이 cmdlet에서 허용되는 입력 형식을 확인하려면 Cmdlet 입력 및 출력 형식을 참조하십시오. (https://go.microsoft.com/fwlink/p/?linkId=616387).cmdlet의 입력 유형 필드가 비어 있으면 cmdlet은 입력 데이터를 허용하지 않습니다.

## OUTPUTS

###  
이 cmdlet에서 허용되는 반환 유형 (출력 유형이라고도 함)을 보려면 Cmdlet 입력 및 출력 형식을 참조하십시오. (https://go.microsoft.com/fwlink/p/?linkId=616387). 출력 형식 필드가 비어 있으면 cmdlet에서 데이터를 반환하지 않습니다.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/9ff9204a-cc18-4e39-9159-1d16314217cd.aspx)

